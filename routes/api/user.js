const express = require("express");
const passport = require("passport");
const router = express.Router();
const keys = require("../../config/keys");

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] }),
  (req, res) => {
    console.log("ggggggggggggg ", req.user);
    res.send(req.user);
  }
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect(keys.authRedirect);
  }
);

router.get("/logout", (req, res) => {
  req.logout();

  res.redirect(keys.authRedirect);
});
router.get("/current_user", (req, res) => {
  console.log("ggggggggggggg ", req.user);
  res.json(req.user);
});

module.exports = router;
