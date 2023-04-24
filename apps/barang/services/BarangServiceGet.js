const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_MAIN_TABLE } = require("../config");

const BarangServiceGet = async (kodeBarang) => {
  return (
    await BaseServiceQueryBuilder(BARANG_CONFIG_MAIN_TABLE).where({
      kodeBarang,
    })
  )[0];
};

module.exports = BarangServiceGet;
