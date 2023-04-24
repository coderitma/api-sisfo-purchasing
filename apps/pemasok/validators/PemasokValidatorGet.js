const { param } = require("express-validator");
const PemasokServiceGet = require("../services/PemasokServiceGet");

const PemasokValidatorGet = () => {
  return [
    param("kodePemasok")
      .notEmpty()
      .withMessage("Kode pemasok kosong.")
      .bail()
      .trim()
      .custom(async (value) => {
        const pemasok = await PemasokServiceGet(value);
        if (!pemasok) {
          throw new Error("Kode pemasok tidak ditemukan.");
        }
      }),
  ];
};

module.exports = PemasokValidatorGet;
