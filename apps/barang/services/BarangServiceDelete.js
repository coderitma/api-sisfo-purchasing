const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_MAIN_TABLE } = require("../config");

const BarangServiceDelete = async (kodeBarang) => {
  await BaseServiceQueryBuilder(BARANG_CONFIG_MAIN_TABLE)
    .where({ kodeBarang })
    .del();

  return null;
};

module.exports = BarangServiceDelete;
