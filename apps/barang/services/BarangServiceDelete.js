const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_MAIN_TABLE } = require("../config");

const BarangServiceDelete = async (kodeBarang) => {
  try {
    await BaseServiceQueryBuilder(BARANG_CONFIG_MAIN_TABLE)
      .where({ kodeBarang })
      .del();
  } catch (error) {
    console.log(error);
  } finally {
    return null;
  }
};

module.exports = BarangServiceDelete;
