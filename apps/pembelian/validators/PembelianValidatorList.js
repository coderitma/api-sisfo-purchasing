const BaseValidatorFields = require("../../base/validators/BaseValidatorFields");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const PembelianValidatorList = () => {
  return [
    BaseValidatorFields.page(),
    BaseValidatorFields.terms(BaseValidatorFields.locator.query),
    BaseValidatorRun(),
  ];
};

module.exports = PembelianValidatorList;
