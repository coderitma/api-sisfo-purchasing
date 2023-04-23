const _ = require("lodash");
var bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const UserService = require("./UserServices");
const BaseServices = require("../base/BaseServices");

const UserValidators = {};

const validateFirstName = () =>
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Nama depan wajib diisi")
    .bail();

const validateLastName = () =>
  check("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Nama belakang wajib diisi")
    .bail();

const validateEmail = () =>
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email wajib diisi")
    .bail()
    .isEmail()
    .withMessage("Email harus benar dan valid")
    .bail()
    .custom(async (value, { req }) => {
      if (_.isEmpty(await UserService.isEmailExist(value))) {
        return Promise.reject();
      }
    })
    .withMessage("Email belum terdaftar")
    .bail();

const validateEmailBackward = () =>
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Email wajib diisi")
    .bail()
    .isEmail()
    .withMessage("Email harus benar dan valid")
    .bail()
    .custom(async (value, { req }) => {
      if (!_.isEmpty(await UserService.isEmailExist(value))) {
        return Promise.reject();
      }
    })
    .withMessage("Email sudah terdaftar")
    .bail();

const validatePassword = () =>
  check("password")
    .notEmpty()
    .withMessage("Passsword tidak boleh kosong")
    .isLength({ min: 8, max: 100 })
    .withMessage("Minimum password 8 karakter!")
    .bail()
    .withMessage("Password tidak tepat")
    .bail();

const validatePasswordBackward = () =>
  validatePassword()
    .custom(async (value, { req }) => {
      const user = await UserService.fetch(req.body.email);

      if (!user) return Promise.reject();
      if (!(await bcrypt.compare(value, user.password)))
        return Promise.reject();
    })
    .withMessage("Password tidak tepat")
    .bail();

UserValidators.register = [
  validateFirstName(),
  validateLastName(),
  validateEmailBackward(),
  validatePassword(),
  BaseServices.executeValidator,
];

UserValidators.login = [
  validateEmail(),
  validatePassword(),
  BaseServices.executeValidator,
];

UserValidators.fields = [
  validateFirstName,
  validateLastName,
  validateEmail,
  validateEmailBackward,
  validatePassword,
  validatePasswordBackward,
];

module.exports = UserValidators;
