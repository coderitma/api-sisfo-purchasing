const { body } = require("express-validator");
const PemasokValidatorFields = require("./PemasokValidatorFields");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const PemasokValidatorCreate = () => {
  return [
    PemasokValidatorFields.kodePemasok(),
    PemasokValidatorFields.namaPemasok(),
    PemasokValidatorFields.alamatPemasok(),
    PemasokValidatorFields.teleponPemasok(),
    BaseValidatorRun(),
  ];
};

module.exports = PemasokValidatorCreate;
