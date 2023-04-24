const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const {
  PEMBELIAN_CONFIG_MAIN_TABLE,
  PEMBELIAN_CONFIG_ITEM_BELI_TABLE,
} = require("../config");

const PembelianServiceCreate = async (
  faktur,
  tanggal,
  total,
  dibayar,
  kembali,
  kodePemasok,
  items
) => {
  const dataPembelian = {
    faktur,
    tanggal,
    total,
    dibayar,
    kembali,
    kodePemasok,
  };

  const dataItemPembelian = items.map((item) => {
    return {
      faktur,
      kodeBarang: item.kodeBarang,
      jumlahBarang: 0,
      jumlahBeli: item.jumlahBeli,
      namaBarang: item.namaBarang,
      hargaBeli: item.hargaBeli,
      hargaJual: item.hargaJual,
      subtotal: item.subtotal,
    };
  });

  await BaseServiceQueryBuilder.transaction(async (trx) => {
    await BaseServiceQueryBuilder(PEMBELIAN_CONFIG_MAIN_TABLE)
      .insert(dataPembelian)
      .transacting(trx);

    await BaseServiceQueryBuilder(PEMBELIAN_CONFIG_ITEM_BELI_TABLE)
      .insert(dataItemPembelian)
      .transacting(trx);
  });

  return { ...dataPembelian, items: dataItemPembelian };
};

module.exports = PembelianServiceCreate;
