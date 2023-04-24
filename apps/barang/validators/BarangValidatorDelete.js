const BarangValidatorGet = require("./BarangValidatorGet");

const BarangValidatorDelete = () => {
  return [BarangValidatorGet()];
};

module.exports = BarangValidatorDelete;
