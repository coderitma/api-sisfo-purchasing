const BaseValidatorQueryPage = require("../../base/validators/BaseValidatorQueryPage");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const PemasokValidatorList = () => {
  return [BaseValidatorQueryPage(), BaseValidatorRun()];
};

module.exports = PemasokValidatorList;
