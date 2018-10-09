const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

// start auth with google+
passport.serializeUser((user, done) => {
  // user.id the id was gen by mondodb NOT googleId
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const findUserWithId = await User.findById(id);
  done(null, findUserWithId);
});
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/api/user/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({
        googleId: profile.id
      });
      if (user) {
        done(null, user);
      } else {
        const createUser = await new User({
          googleId: profile.id,
          name: profile.displayName || profile.familyName || profile.givenName,
          email: profile.emails[0].value,
          avatar: profile._json.image.url
        }).save();

        done(null, createUser);
      }

      console.log("accessToken ", accessToken);
      // console.log("refreshToken ", refreshToken);
      // console.log("profile ", profile._json);
    }
  )
);
