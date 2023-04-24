const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserControllerLogin = require("./controllers/UserControllerLogin");
const UserControllerRegister = require("./controllers/UserControllerRegister");
const UserValidatorLogin = require("./validators/UserValidatorLogin");
const UserValidatorRegister = require("./validators/UserValidatorRegister");

const router = require("express").Router();

router.post(
  "/login",
  [...UserValidatorLogin(), BaseValidatorRun],
  UserControllerLogin
);
router.post(
  "/register",
  [...UserValidatorRegister(), BaseValidatorRun],
  UserControllerRegister
);

module.exports = router;