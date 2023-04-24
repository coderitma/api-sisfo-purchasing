const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_TABLE } = require("../config");

const BarangServiceCreate = async (
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

  await BaseServiceQueryBuilder(BARANG_CONFIG_TABLE).insert(data);

  return data;
};

module.exports = BarangServiceCreate;
