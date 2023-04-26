const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PemasokValidatorFields = require("./PemasokValidatorFields");

const PemasokValidatorEdit = () => {
  return [
    PemasokValidatorFields.kodePemasok(
      PemasokValidatorFields.locator.param,
      false
    ),
    PemasokValidatorFields.namaPemasok(),
    PemasokValidatorFields.alamatPemasok(),
    PemasokValidatorFields.teleponPemasok(),
    BaseValidatorRun(),
  ];
};

module.exports = PemasokValidatorEdit;
