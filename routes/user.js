const User = require("../models/user");
const { Router } = require("express");
// const { render } = require("express/lib/response");

const router = Router();

router.get("/signin", (req, res) => {
  return res.render("signin");
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.post("/signup", async (req, res) => {
  const { fullName, email, password } = req.body;

  await User.create({
    fullName,
    email,
    password,
  });

  return res.redirect("/");
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  const user = await User.matchPassword(email, password);

  console.log("user", user);
  return res.redirect("/");
});

module.exports = router;
