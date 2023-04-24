const { param } = require("express-validator");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const BarangServiceGet = require("../services/BarangServiceGet");

const BarangValidatorDelete = () => {
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
    BaseValidatorRun,
  ];
};

module.exports = BarangValidatorDelete;
