const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { PEMASOK_CONFIG_MAIN_TABLE } = require("../config");

const PemasokServiceGet = async (kodePemasok) => {
  return (
    await BaseServiceQueryBuilder(PEMASOK_CONFIG_MAIN_TABLE).where({
      kodePemasok,
    })
  )[0];
};

module.exports = PemasokServiceGet;
