const express = require("express");

const router = express.Router();
const validateProfileInput = require("../../validation/profile");
const validateExperienceInput = require("../../validation/experience");
const validateEducationInput = require("../../validation/education");
const login = require("../../middlewares/login");

const Profile = require("../../models/Profiles");
const User = require("../../models/Users");

//privet

router.get("/", login, async (req, res) => {
  console.log("jjjjjj", req.user);
  try {
    const errors = {};
    const profile = await Profile.findOne({ user: req.user._id }).populate(
      "user",
      ["name", "avatar"]
    );
    if (!profile) {
      errors.noprofile = "This user have not profile";
      res.status(404).json(errors);
    }
    res.json(profile);
  } catch (error) {
    res.status(404).json(error);
  }
});

//public
router.get("/handle/:handle", async (req, res) => {
  try {
    const errors = {};
    const profile = await Profile.findOne({
      handle: req.params.handle
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      errors.noprofile = "This user have not profile";
      res.status(404).json(errors);
    }
    res.json(profile);
  } catch (error) {
    res.status(404).json({ profile: "This user have not profile" });
  }
});

//public
router.get("/user/:user_id", async (req, res) => {
  try {
    const errors = {};
    const profile = await Profile.findOne({
      user: req.params.user_id
    }).populate("user", ["name", "avatar"]);
    if (!profile) {
      errors.noprofile = "This user have not profile";
      res.status(404).json(errors);
    }
    res.json(profile);
  } catch (error) {
    res.status(404).json({ profile: "This user have not profile" });
  }
});

//public
router.get("/all", async (req, res) => {
  try {
    const errors = {};
    const profiles = await Profile.find().populate("user", ["name", "avatar"]);
    if (!profiles) {
      errors.noprofiles = "there are no profiles";
      res.status(404).json(errors);
    }
    res.json(profiles);
  } catch (error) {
    res.status(404).json({ profile: "there are no profiles" });
  }
});

//privet

router.post("/", login, async (req, res) => {
  const { errors, isValid } = validateProfileInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }
  try {
    //console.log(req.body, req.user);

    const profileFields = {};
    profileFields.user = req.user.id;
    if (req.body.handle) profileFields.handle = req.body.handle;
    if (req.body.company) profileFields.company = req.body.company;
    if (req.body.website) profileFields.website = req.body.website;
    if (req.body.location) profileFields.location = req.body.location;
    if (req.body.bio) profileFields.bio = req.body.bio;
    if (req.body.status) profileFields.status = req.body.status;
    if (req.body.githubusername)
      profileFields.githubusername = req.body.githubusername;
    if (typeof req.body.skills !== "undefined") {
      profileFields.skills = req.body.skills.split(",");
    }
    //social
    profileFields.social = {};
    if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
    if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
    if (req.body.linkedin) profileFields.social.linkedin = req.body.linkedin;

    const profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //update
      const updateProfile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      res.json(updateProfile);
    } else {
      //create

      //check if handle exists
      const existsProfile = await Profile.findOne({
        handle: profileFields.handle
      });
      if (existsProfile) {
        errors.handle = "the handle already exists";
        res.status(400).json(errors);
      }
      new Profile(profileFields).save().then(profile => res.json(profile));
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

// privet experience

router.post("/experience", login, async (req, res) => {
  const { errors, isValid } = validateExperienceInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }

  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //update
      const newExperience = {
        title: req.body.title,
        company: req.body.company,
        location: req.body.location,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };
      profile.experience.unshift(newExperience);
      const newProfile = await profile.save();
      res.json(newProfile);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//privet delete experience

router.delete("/experience/:exp_id", login, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      const removeIndex = profile.experience
        .map(item => item.id)
        .indexOf(req.params.exp_id);

      profile.experience.splice(removeIndex, 1);
      const newProfile = await profile.save();
      res.json(newProfile);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//privet education

router.post("/education", login, async (req, res) => {
  const { errors, isValid } = validateEducationInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }

  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //update
      const newEducation = {
        school: req.body.school,
        degree: req.body.degree,
        fieldofstudy: req.body.fieldofstudy,
        from: req.body.from,
        to: req.body.to,
        current: req.body.current,
        description: req.body.description
      };
      profile.education.unshift(newEducation);
      const newProfile = await profile.save();
      res.json(newProfile);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//privet delete education

router.delete("/education/:edu_id", login, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      const removeIndex = profile.education
        .map(item => item.id)
        .indexOf(req.params.edu_id);

      profile.education.splice(removeIndex, 1);
      const newProfile = await profile.save();
      res.json(newProfile);
    }
  } catch (error) {
    res.status(404).json(error);
  }
});

//privet delete user and  profile

router.delete("/", login, (req, res) => {
  try {
    Profile.findOneAndRemove({ user: req.user.id }).then(() => {
      User.findOneAndRemove({ _id: req.user.id }).then(() =>
        res.json({ success: true })
      );
    });
  } catch (error) {
    res.status(404).json(error);
  }
});

module.exports = router;
