const BaseServicePaginator = require("../../base/services/BaseServicePaginator");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_TABLE } = require("../config");

const BarangServiceList = async (terms, page) => {
  const queryBuilder = BaseServiceQueryBuilder(BARANG_CONFIG_TABLE);

  if (terms) {
    queryBuilder
      .whereILike("kodeBarang", `%${terms}%`)
      .orWhereILike("namaBarang", `%${terms}%`);
  }

  return {
    ...(await BaseServicePaginator(page, queryBuilder)),
    terms: terms ? terms : "",
  };
};

module.exports = BarangServiceList;
