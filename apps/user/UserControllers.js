const UserControllers = require("express").Router();
const UserService = require("./UserServices");
const UserValidators = require("./UserValidators");

UserControllers.post(
  "/register",
  [...UserValidators.register],
  async (req, res) => {
    return res
      .status(200)
      .json(
        await UserService.create(
          req.body.firstName,
          req.body.lastName,
          req.body.email,
          req.body.password
        )
      );
  }
);

UserControllers.post("/login", [...UserValidators.login], async (req, res) => {
  return res
    .status(200)
    .json({ token: await UserService.createJWT(req.body.email) });
});

module.exports = UserControllers;
