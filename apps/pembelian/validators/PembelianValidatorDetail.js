const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PembelianValidatorFields = require("./PembelianValidatorFields");

const PembelianValidatorDetail = () => {
  return [
    PembelianValidatorFields.faktur(
      PembelianValidatorFields.locator.param,
      false
    ),
    BaseValidatorRun(),
  ];
};

module.exports = PembelianValidatorDetail;
