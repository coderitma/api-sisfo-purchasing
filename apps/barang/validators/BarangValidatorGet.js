const { param } = require("express-validator");
const BarangServiceGet = require("../services/BarangServiceGet");

const BarangValidatorGet = () => {
  return [
    param("kodeBarang")
      .notEmpty()
      .withMessage("Kode barang wajib")
      .bail()
      .trim()
      .custom(async (value) => {
        const barang = await BarangServiceGet(value);
        if (!barang) {
          throw new Error("Barang tidak tersedia.");
        }
      }),
  ];
};

module.exports = BarangValidatorGet;
