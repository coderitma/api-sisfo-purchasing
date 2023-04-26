const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PembelianValidatorFields = require("./PembelianValidatorFields");

const PembelianValidatorReportPeriodExcel = () => {
  return [
    PembelianValidatorFields.reporting.terms(),
    PembelianValidatorFields.reporting.startDate(),
    PembelianValidatorFields.reporting.endDate(),
    BaseValidatorRun(),
  ];
};

module.exports = PembelianValidatorReportPeriodExcel;
