const { param } = require("express-validator");
const PemasokServiceGet = require("../services/PemasokServiceGet");

const PemasokValidatorGet = () => {
  return [
    param("kodePemasok")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Kode pemasok wajib")
      .bail()
      .custom(async (value) => {
        const pemasok = await PemasokServiceGet(value);
        if (!pemasok) {
          throw new Error("Kode pemasok tidak tersedia.");
        }
      })
      .bail(),
  ];
};

module.exports = PemasokValidatorGet;
