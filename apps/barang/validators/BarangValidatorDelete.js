const _ = require("lodash");
const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PembelianServiceGetItemBeli = require("../../pembelian/services/PembelianServiceGetItemBeli");
const BarangValidatorFields = require("./BarangValidatorFields");

const BarangValidatorDelete = () => {
  return [
    BarangValidatorFields.kodeBarang(BarangValidatorFields.locator.param, false)
      .bail()
      .custom(async (value) => {
        const itemBeli = await PembelianServiceGetItemBeli(
          "kodeBarang",
          value,
          true
        );
        if (!_.isEmpty(itemBeli)) {
          return Promise.reject(
            "Barang tidak dapat dihapus karena ada di transaksi."
          );
        }
      }),
    BaseValidatorRun(),
  ];
};

module.exports = BarangValidatorDelete;
