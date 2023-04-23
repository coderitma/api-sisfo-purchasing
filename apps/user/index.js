const UserControllerLogin = require("./controllers/UserControllerLogin");
const UserControllerRegister = require("./controllers/UserControllerRegister");
const UserValidatorLogin = require("./validators/UserValidatorLogin");
const UserValidatorRegister = require("./validators/UserValidatorRegister");

const router = require("express").Router();

router.post("/login", [...UserValidatorLogin()], UserControllerLogin);
router.post("/register", [...UserValidatorRegister(), UserControllerRegister]);

module.exports = router;
