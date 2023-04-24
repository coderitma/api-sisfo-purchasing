const { param } = require("express-validator");
const BarangServiceGet = require("../services/BarangServiceGet");

const BarangValidatorGet = () => {
  return [
    param("kodeBarang")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Kode barang wajib")
      .bail()
      .custom(async (value) => {
        const barang = await BarangServiceGet(value);
        if (!barang) {
          throw new Error("Kode barang tidak tersedia.");
        }
      })
      .bail(),
  ];
};

module.exports = BarangValidatorGet;
