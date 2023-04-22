const { body, validationResult, query, param } = require("express-validator");
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
  body("hargaBeli")
    .not()
    .isEmpty()
    .withMessage("Harga jual wajib.")
    .bail()
    .not()
    .custom((value) => _.isNumber(value))
    .withMessage("Harga beli harus angka.")
    .bail()
    .not()
    .custom((value) => value <= 0)
    .withMessage("Harga beli tidak boleh 0")
    .bail();

const validateHargaJual = () =>
  body("hargaJual")
    .not()
    .isEmpty()
    .withMessage("Harga jual wajib.")
    .bail()
    .not()
    .custom((value) => _.isNumber(value))
    .withMessage("Harga jual harus angka.")
    .bail()
    .not()
    .custom((value) => value <= 0)
    .withMessage("Harga beli tidak boleh 0")
    .bail()
    .not()
    .custom((value, { req }) => value <= req.body.hargaBeli)
    .withMessage("Harga jual tidak boleh kurang atau sama dengan harga beli.")
    .bail();

const validateJumlahBarang = () =>
  body("jumlahBarang")
    .not()
    .isEmpty()
    .withMessage("Jumalah barang wajib.")
    .bail()
    .not()
    .custom((value) => _.isNumber(value))
    .withMessage("Jumlah barang harus angka.")
    .bail()
    .not()
    .custom((value) => value < 1)
    .withMessage("Jumlah barang tidak boleh kurang dari 1 unit")
    .bail();

const validateQueryPage = () =>
  query("page")
    .optional()
    .isNumeric()
    .customSanitizer((value) => parseInt(value));

const validateParamKodeBarang = () =>
  param("kodeBarang")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Kode barang wajib disertakan pada parameter")
    .bail()
    .custom(async (value) => {
      const barang = await BarangServices.fetch(value);
      if (!barang) {
        return Promise.reject();
      }
    })
    .withMessage("Kode barang tidak tersedia")
    .bail();

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
  validateHargaBeli(),
  validateHargaJual(),
  validateJumlahBarang(),
  BaseServices.executeValidator,
];

BarangValidators.list = [validateQueryPage(), BaseServices.executeValidator];

BarangValidators.detail = [
  validateParamKodeBarang(),
  BaseServices.executeValidator,
];

BarangValidators.edit = [
  validateParamKodeBarang(),
  validateNamaBarang(),
  validateHargaBeli(),
  validateHargaJual(),
  validateJumlahBarang(),
  BaseServices.executeValidator,
];

BarangValidators.delete = [...BarangValidators.detail];

module.exports = BarangValidators;
