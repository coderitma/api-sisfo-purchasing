const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_TABLE } = require("../config");

const BarangServiceDelete = async (kodeBarang) => {
  await BaseServiceQueryBuilder(BARANG_CONFIG_TABLE)
    .where({ kodeBarang })
    .del();

  return null;
};

module.exports = BarangServiceDelete;
