const PemasokValidatorFields = require("./PemasokValidatorFields");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const PemasokValidatorGet = () => {
  return [
    PemasokValidatorFields.kodePemasok(
      PemasokValidatorFields.locator.param,
      false
    ),
    BaseValidatorRun(),
  ];
};

module.exports = PemasokValidatorGet;
