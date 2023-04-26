const { body } = require("express-validator");
var bcrypt = require("bcryptjs");
const UserServiceFetch = require("../services/UserServiceFetch");
const UserServiceIsEmailExist = require("../services/UserServiceIsEmailExist");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const UserValidatorLogin = () => {
  return [
    body("email")
      .notEmpty()
      .withMessage("Email wajib diisi.")
      .trim()
      .isEmail()
      .withMessage("Email tidak valid.")
      .custom(async (value, { req }) => {
        if (!(await UserServiceIsEmailExist(value))) {
          throw new Error("Email belum terdaftar.");
        }
      }),
    body("password")
      .notEmpty()
      .withMessage("Passsword wajib diisi.")
      .trim()
      .isLength({ min: 8, max: 100 })
      .withMessage("Password minimal 8 karakter.")
      .custom(async (value, { req }) => {
        const user = await UserServiceFetch(req.body.email);
        if (!(await bcrypt.compare(value, user ? user.password : ""))) {
          throw new Error("Password tidak valid.");
        }
      }),
    BaseValidatorRun(),
  ];
};

module.exports = UserValidatorLogin;
