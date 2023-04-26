const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const BarangValidatorFields = require("./BarangValidatorFields");

const BarangValidatorGet = () => {
  return [
    BarangValidatorFields.kodeBarang(
      BarangValidatorFields.locator.param,
      false
    ),
    BaseValidatorRun(),
  ];
};

module.exports = BarangValidatorGet;
