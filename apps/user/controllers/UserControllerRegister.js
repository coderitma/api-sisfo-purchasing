const UserServiceRegister = require("../services/UserServiceRegister");

const UserControllerRegister = async (req, res) => {
  return res
    .status(200)
    .json(
      await UserServiceRegister(
        req.body.firstName,
        req.body.lastName,
        req.body.email,
        req.body.password
      )
    );
};

module.exports = UserControllerRegister;
