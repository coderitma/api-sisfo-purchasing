const BaseValidatorQueryPage = require("../../base/validators/BaseValidatorQueryPage");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");

const BarangValidatorList = () => {
  return [BaseValidatorQueryPage(), BaseValidatorRun()];
};

module.exports = BarangValidatorList;
