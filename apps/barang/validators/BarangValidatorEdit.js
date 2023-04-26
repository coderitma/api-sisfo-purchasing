const { body } = require("express-validator");
const BarangValidatorGet = require("./BarangValidatorGet");
const BarangValidatorCreate = require("./BarangValidatorCreate");
const BarangValidatorFields = require("./BarangValidatorFields");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const BarangValidatorEdit = () => {
  return [
    BarangValidatorFields.kodeBarang(
      BarangValidatorFields.locator.param,
      false
    ),
    BarangValidatorFields.namaBarang(),
    BarangValidatorFields.hargaBeli(),
    BarangValidatorFields.hargaJual(),
    BarangValidatorFields.jumlahBarang(),
    BaseValidatorRun(),
  ];
};

module.exports = BarangValidatorEdit;
