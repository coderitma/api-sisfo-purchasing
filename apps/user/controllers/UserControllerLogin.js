const UserServiceCreateJWT = require("../services/UserServiceCreateJWT");

const UserControllerLogin = async (req, res) => {
  return res.status(200).json(await UserServiceCreateJWT(req.body.email));
};

module.exports = UserControllerLogin;
