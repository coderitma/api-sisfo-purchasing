const { check } = require("express-validator");
var bcrypt = require("bcryptjs");
const UserServiceFetch = require("../services/UserServiceFetch");

const UserValidatorLogin = () => {
  return [
    check("email")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Email wajib diisi")
      .bail()
      .isEmail()
      .withMessage("Email harus benar dan valid")
      .bail()
      .not()
      .custom(async (value, { req }) => {
        if (!_.isEmpty(await UserServiceIsEmailExist(value))) {
          return Promise.reject();
        }

        return value;
      })
      .withMessage("Email belum terdaftar")
      .bail(),
    check("password")
      .notEmpty()
      .withMessage("Passsword tidak boleh kosong")
      .isLength({ min: 8, max: 100 })
      .withMessage("Minimum password 8 karakter!")
      .bail()
      .custom(async (value, { req }) => {
        const user = await UserServiceFetch(req.body.email);

        if (!(await bcrypt.compare(value, user.password))) {
          throw new Error("Password tidak tepat");
        }

        return value;
      })
      .bail(),
  ];
};

module.exports = UserValidatorLogin;
