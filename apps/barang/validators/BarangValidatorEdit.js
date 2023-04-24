const { param, body } = require("express-validator");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const BarangServiceGet = require("../services/BarangServiceGet");

const BarangValidatorEdit = () => {
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
    body("namaBarang")
      .trim()
      .not()
      .isEmpty()
      .withMessage("Nama barang wajib.")
      .bail()
      .isLength({
        min: 5,
      })
      .withMessage("Nama barang minimal 5 karakter.")
      .bail(),
    body("hargaBeli")
      .not()
      .isEmpty()
      .withMessage("Harga beli wajib.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .not()
      .custom((value) => value <= 0)
      .withMessage("Harga beli tidak boleh 0")
      .bail(),
    body("hargaJual")
      .not()
      .isEmpty()
      .withMessage("Harga jual wajib.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .not()
      .custom((value) => value <= 0)
      .withMessage("Harga beli tidak boleh 0")
      .bail()
      .not()
      .custom((value, { req }) => value <= req.body.hargaBeli)
      .withMessage("Harga jual tidak boleh kurang atau sama dengan harga beli.")
      .bail(),
    body("jumlahBarang")
      .not()
      .isEmpty()
      .withMessage("Jumalah barang wajib.")
      .bail()
      .not()
      .customSanitizer((value) => parseInt(value))
      .not()
      .custom((value) => value < 1)
      .withMessage("Jumlah barang tidak boleh kurang dari 1 unit")
      .bail(),
    BaseValidatorRun,
  ];
};

module.exports = BarangValidatorEdit;
