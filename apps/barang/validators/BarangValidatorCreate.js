const { body } = require("express-validator");
const BarangValidatorFields = require("./BarangValidatorFields");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const BarangValidatorCreate = () => {
  return [
    BarangValidatorFields.kodeBarang(),
    BarangValidatorFields.namaBarang(),
    BarangValidatorFields.hargaBeli(),
    BarangValidatorFields.hargaJual(),
    BarangValidatorFields.jumlahBarang(),
    BaseValidatorRun(),
  ];
};

module.exports = BarangValidatorCreate;
