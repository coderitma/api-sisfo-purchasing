const _ = require("lodash");
const { check } = require("express-validator");
const UserServiceIsEmailExist = require("../services/UserServiceIsEmailExist");

const UserValidatorRegister = () => {
  return [
    check("firstName")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Nama depan wajib diisi")
      .bail(),
    check("lastName")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Nama belakang wajib diisi")
      .bail(),
    check("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Email wajib diisi")
      .bail()
      .isEmail()
      .withMessage("Email harus benar dan valid")
      .bail()
      .custom(async (value) => {
        if (await UserServiceIsEmailExist(value)) {
          throw new Error("Email sudah terdaftar.");
        }
      })
      .bail(),
    check("password")
      .notEmpty()
      .withMessage("Passsword tidak boleh kosong")
      .isLength({ min: 8, max: 100 })
      .withMessage("Minimum password 8 karakter!")
      .bail(),
  ];
};

module.exports = UserValidatorRegister;
