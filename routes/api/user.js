const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/surveys");
  }
);

router.get("/logout", (req, res) => {
  req.logout();
  res.send(req.user);
});
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

module.exports = router;
