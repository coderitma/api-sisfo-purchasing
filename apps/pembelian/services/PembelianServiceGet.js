const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { PEMBELIAN_CONFIG_MAIN_TABLE } = require("../config");
const PembelianServiceGetItemBeli = require("./PembelianServiceGetItemBeli");
const _ = require("lodash");

const PembelianServiceGet = async (field, value, many = false) => {
  const results = await BaseServiceQueryBuilder(
    PEMBELIAN_CONFIG_MAIN_TABLE
  ).where({ [field]: value });

  if (many) return results;

  const pembelian = results[0];

  if (_.isEmpty(pembelian)) throw new Error("Pembelian tidak tersedia...");
  const items = await PembelianServiceGetItemBeli(
    "faktur",
    pembelian.faktur,
    true
  );

  return { ...pembelian, items };
};

module.exports = PembelianServiceGet;
