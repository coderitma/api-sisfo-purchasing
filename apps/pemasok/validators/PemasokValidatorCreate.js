const { body } = require("express-validator");
const PemasokServiceGet = require("../services/PemasokServiceGet");

const PemasokValidatorCreate = () => {
  return [
    body("kodePemasok")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Kode pemasok wajib")
      .bail()
      .custom(async (value) => {
        const pemasok = await PemasokServiceGet(value);
        if (pemasok) {
          throw new Error("Kode pemasok sudah digunakan.");
        }
      })
      .bail(),
    body("namaPemasok")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Nama pemasok wajib.")
      .bail()
      .isLength({
        min: 5,
      })
      .withMessage("Nama pemasok minimal 5 karakter.")
      .bail(),
    body("alamatPemasok")
      .trim()
      .isLength({
        min: 10,
      })
      .withMessage("Alamat pemasok minimal 10 karakter.")
      .bail(),
    body("teleponPemasok")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Telepon pemasok wajib.")
      .bail()
      .isLength({
        min: 10,
        max: 13,
      })
      .withMessage("Telepon pemasok harus 10 s/d 13 karakter.")
      .bail(),
  ];
};

module.exports = PemasokValidatorCreate;
