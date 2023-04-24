const { body } = require("express-validator");
const PemasokServiceGet = require("../services/PemasokServiceGet");

const PemasokValidatorCreate = () => {
  return [
    body("kodePemasok")
      .notEmpty()
      .withMessage("Kode pemasok harus diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const pemasok = await PemasokServiceGet(value);
        if (pemasok) {
          throw new Error("Kode pemasok sudah pernah dibuat.");
        }
      })
      .bail(),
    body("namaPemasok")
      .notEmpty()
      .withMessage("Nama pemasok kosong.")
      .bail()
      .trim()
      .isLength({
        min: 5,
      })
      .withMessage("Nama pemasok kurang dari 5 karakter."),
    body("alamatPemasok")
      .notEmpty()
      .withMessage("Alamat pemasok kosong.")
      .bail()
      .trim()
      .isLength({
        min: 10,
      })
      .withMessage("Alamat pemasok kurang dari 10 karakter."),
    body("teleponPemasok")
      .notEmpty()
      .withMessage("Telepon pemasok kosong.")
      .bail()
      .trim()
      .isLength({
        min: 10,
        max: 13,
      })
      .withMessage(
        "Telepon pemasok kurang dari 10 atau lebih dari 13 nomor karakter."
      ),
  ];
};

module.exports = PemasokValidatorCreate;
