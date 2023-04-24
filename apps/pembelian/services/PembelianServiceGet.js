const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { PEMBELIAN_CONFIG_MAIN_TABLE } = require("../config");

const PembelianServiceGet = async (faktur) => {
  return (
    await BaseServiceQueryBuilder(PEMBELIAN_CONFIG_MAIN_TABLE).where({ faktur })
  )[0];
};

module.exports = PembelianServiceGet;
