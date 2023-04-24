const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { BARANG_CONFIG_TABLE } = require("../config");

const BarangServiceEdit = async (
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

  await BaseServiceQueryBuilder(BARANG_CONFIG_TABLE)
    .where({ kodeBarang })
    .update(data);

  return { kodeBarang, ...data };
};

module.exports = BarangServiceEdit;
