const BaseServices = require("../base/BaseServices");
const BarangConstants = require("./BarangConstants");

const BarangServices = {};

BarangServices.create = async (
  kodeBarang,
  namaBarang,
  hargaBeli,
  hargaJual,
  jumlahBarang
) => {
  const data = {
    kodeBarang,
    namaBarang,
    hargaBeli,
    hargaJual,
    jumlahBarang,
  };

  await BaseServices.queryBuilder(BarangConstants.BARANG_TABLE).insert(data);

  return data;
};

BarangServices.fetchAll = async (terms, page) => {
  const queryBuilder = BaseServices.queryBuilder(BarangConstants.BARANG_TABLE);

  if (terms) {
    queryBuilder
      .whereILike("kodeBarang", `%${terms}%`)
      .orWhereILike("namaBarang", `%${terms}%`);
  }

  return await BaseServices.paginator(page, queryBuilder);
};

BarangServices.fetch = async (kodeBarang) => {
  return (
    await BaseServices.queryBuilder(BarangConstants.BARANG_TABLE).where({
      kodeBarang,
    })
  )[0];
};

module.exports = BarangServices;
