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

  await BaseServices.queryBuilder(BarangConstants.TABLE).insert(data);

  return data;
};

BarangServices.fetchAll = async (terms, page) => {
  const queryBuilder = BaseServices.queryBuilder(BarangConstants.TABLE);

  if (terms) {
    queryBuilder
      .whereILike("kodeBarang", `%${terms}%`)
      .orWhereILike("namaBarang", `%${terms}%`);
  }

  return {
    ...(await BaseServices.paginator(page, queryBuilder)),
    terms: terms ? terms : "",
  };
};

BarangServices.fetch = async (kodeBarang) => {
  return (
    await BaseServices.queryBuilder(BarangConstants.TABLE).where({
      kodeBarang,
    })
  )[0];
};

BarangServices.edit = async (
  kodeBarang,
  namaBarang,
  hargaBeli,
  hargaJual,
  jumlahBarang
) => {
  const data = {
    namaBarang,
    hargaBeli,
    hargaJual,
    jumlahBarang,
  };

  await BaseServices.queryBuilder(BarangConstants.TABLE)
    .where({ kodeBarang })
    .update(data);

  return { kodeBarang, ...data };
};

BarangServices.delete = async (kodeBarang) => {
  await BaseServices.queryBuilder(BarangConstants.TABLE)
    .where({ kodeBarang })
    .del();

  return null;
};

module.exports = BarangServices;
