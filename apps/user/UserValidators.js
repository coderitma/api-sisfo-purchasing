const _ = require("lodash");
var bcrypt = require("bcryptjs");
const { body } = require("express-validator");
const UserService = require("./UserServices");
const BaseServices = require("../base/BaseServices");

const UserValidators = {};

const validateFirstName = () =>
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Nama depan wajib diisi")
    .bail();

const validateLastName = () =>
  body("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Nama belakang wajib diisi")
    .bail();

const validateEmail = () =>
  body("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email wajib diisi")
    .bail()
    .isEmail()
    .withMessage("Email harus benar dan valid")
    .bail();

const validatePassword = () =>
  body("password")
    .notEmpty()
    .withMessage("Passsword tidak boleh kosong")
    .isLength({ min: 8, max: 100 })
    .withMessage("Minimum password 8 karakter!")
    .bail();

/**
 * ALL USABLE VALIDATOR IS HERE
 */

UserValidators.register = [
  validateFirstName(),
  validateLastName(),
  validateEmail()
    .custom(async (value, { req }) => {
      if (!_.isEmpty(await UserService.isEmailExist(value))) {
        return Promise.reject();
      }
    })
    .withMessage("Email sudah terdaftar")
    .bail(),
  validatePassword(),
  BaseServices.executeValidator,
];

UserValidators.login = [
  validateEmail()
    .custom(async (value, { req }) => {
      if (_.isEmpty(await UserService.isEmailExist(value))) {
        return Promise.reject();
      }
    })
    .withMessage("Email belum terdaftar")
    .bail(),
  validatePassword()
    .custom(async (value, { req }) => {
      const user = await UserService.fetch(req.body.email);

      if (!user) return Promise.reject();
      if (!(await bcrypt.compare(value, user.password)))
        return Promise.reject();
    })
    .withMessage("Password tidak tepat")
    .bail(),
  BaseServices.executeValidator,
];

module.exports = UserValidators;
