const { body, query, param, check } = require("express-validator");
const BaseServices = require("../base/BaseServices");
const BarangServices = require("./BarangServices");
const BaseValidations = require("../base/BaseValidations");

const BarangValidators = {};

const validateKodeBarang = () =>
  check("kodeBarang")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Kode barang wajib")
    .bail()
    .custom(async (value) => {
      const barang = await BarangServices.fetch(value);
      if (barang) {
        return Promise.reject();
      }
    })
    .withMessage("Kode barang sudah digunakan.")
    .bail();

const validateKodeBarangBackward = () =>
  check("kodeBarang")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Kode barang wajib")
    .bail()
    .custom(async (value) => {
      const barang = await BarangServices.fetch(value);
      if (!barang) {
        return Promise.reject();
      }
    })
    .withMessage("Kode barang tidak ditemukan.")
    .bail();

const validateNamaBarang = () =>
  check("namaBarang")
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
  check("hargaBeli")
    .not()
    .isEmpty()
    .withMessage("Harga beli wajib.")
    .bail()
    .customSanitizer((value) => parseInt(value))
    .not()
    .custom((value) => value <= 0)
    .withMessage("Harga beli tidak boleh 0")
    .bail();

const validateHargaJual = () =>
  check("hargaJual")
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
    .bail();

const validateJumlahBarang = () =>
  check("jumlahBarang")
    .not()
    .isEmpty()
    .withMessage("Jumalah barang wajib.")
    .bail()
    .not()
    .customSanitizer((value) => parseInt(value))
    .not()
    .custom((value) => value < 1)
    .withMessage("Jumlah barang tidak boleh kurang dari 1 unit")
    .bail();

BarangValidators.create = [
  validateKodeBarang(),
  validateNamaBarang(),
  validateHargaBeli(),
  validateHargaJual(),
  validateJumlahBarang(),
  BaseServices.executeValidator,
];

BarangValidators.list = [
  BaseValidations.validateQueryPage(),
  BaseServices.executeValidator,
];

BarangValidators.detail = [
  validateKodeBarangBackward(),
  BaseServices.executeValidator,
];

BarangValidators.edit = [
  validateKodeBarangBackward(),
  validateNamaBarang(),
  validateHargaBeli(),
  validateHargaJual(),
  validateJumlahBarang(),
  BaseServices.executeValidator,
];

BarangValidators.delete = [...BarangValidators.detail];

BarangValidators.fields = {
  validateKodeBarang,
  validateKodeBarangBackward,
  validateNamaBarang,
  validateHargaBeli,
  validateHargaJual,
  validateJumlahBarang,
};

module.exports = BarangValidators;
