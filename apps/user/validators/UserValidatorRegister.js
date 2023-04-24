const _ = require("lodash");
const { check } = require("express-validator");
const UserServiceIsEmailExist = require("../services/UserServiceIsEmailExist");

const UserValidatorRegister = () => {
  return [
    check("firstName")
      .exists()
      .withMessage("Nama depan wajib diisi")
      .bail()
      .trim(),
    check("lastName")
      .exists()
      .withMessage("Nama belakang wajib diisi.")
      .bail()
      .trim(),
    check("email")
      .exists()
      .withMessage("Email wajib diisi.")
      .bail()
      .trim()
      .isEmail()
      .withMessage("Email harus benar dan valid.")
      .bail()
      .custom(async (value) => {
        if (await UserServiceIsEmailExist(value)) {
          throw new Error("Email sudah terdaftar.");
        }
      })
      .bail(),
    check("password")
      .notEmpty()
      .withMessage("Passsword wajib diisi.")
      .isLength({ min: 8, max: 100 })
      .withMessage("Password minimum 8 karakter.")
      .bail(),
  ];
};

module.exports = UserValidatorRegister;
