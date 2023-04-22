const { body, validationResult } = require("express-validator");
const BaseServices = require("../base/BaseServices");
const BarangServices = require("./BarangServices");

const BarangValidators = {};

const validadateKodeBarang = () =>
  body("kodeBarang")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Kode barang wajib")
    .bail();

const validateNamaBarang = () =>
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
    .bail();

const validateHargaBeli = () =>
  body("hargaBeli").not().isEmpty().withMessage("Harga jual wajib.").bail();

const validateHargaJual = () =>
  body("hargaJual").not().isEmpty().withMessage("Harga jual wajib.").bail();

const validateJumlahBarang = () =>
  body("jumlahBarang").not().isEmpty().withMessage("Harga jual wajib.").bail();

BarangValidators.create = [
  validadateKodeBarang()
    .custom(async (value) => {
      const barang = await BarangServices.fetch(value);
      if (barang) {
        return Promise.reject();
      }
    })
    .withMessage("Kode barang sudah digunakan.")
    .bail(),
  validateNamaBarang(),
  validateHargaBeli()
    .not()
    .custom((value) => _.isNumber(value))
    .withMessage("Harga beli harus angka.")
    .bail(),
  validateHargaJual()
    .not()
    .custom((value) => _.isNumber(value))
    .withMessage("Harga jual harus angka.")
    .bail()
    .not()
    .custom((value, { req }) => value <= req.body.hargaBeli)
    .withMessage("Harga jual tidak boleh kurang atau sama dengan harga beli.")
    .bail(),
  validateJumlahBarang()
    .not()
    .custom((value, { req }) => value < 1)
    .withMessage("Jumlah barang tidak boleh kurang dari 1 unit")
    .bail(),
  BaseServices.executeValidator,
];

module.exports = BarangValidators;
