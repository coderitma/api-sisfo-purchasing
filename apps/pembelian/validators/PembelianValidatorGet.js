const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PembelianValidatorFields = require("./PembelianValidatorFields");

const PembelianValidatorGet = () => {
  return [
    PembelianValidatorFields.faktur(
      PembelianValidatorFields.locator.param,
      false
    ),
    BaseValidatorRun(),
  ];
};

module.exports = PembelianValidatorGet;
