const { body } = require("express-validator");
const BarangValidatorGet = require("./BarangValidatorGet");
const BarangValidatorCreate = require("./BarangValidatorCreate");

const BarangValidatorEdit = () => {
  const [, ...barangValidatorCreate] = BarangValidatorCreate();
  return [BarangValidatorGet(), ...barangValidatorCreate];
};

module.exports = BarangValidatorEdit;
