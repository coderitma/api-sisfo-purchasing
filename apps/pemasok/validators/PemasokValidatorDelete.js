const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const PemasokValidatorGet = require("./PemasokValidatorGet");

const PemasokValidatorDelete = () => {
  const [pemasokValidatorGet] = PemasokValidatorGet();
  return [
    pemasokValidatorGet
      .custom(async (value) => {
        // TODO: pindahkan kode ini di dalam service pembelian, nanti..
        const pembelian = (
          await BaseServiceQueryBuilder("pembelian").where({
            kodePemasok: value,
          })
        )[0];

        if (pembelian) {
          throw new Error(
            "Pemasok tidak dapat dihapus karena sudah ada di dalam transaksi pembelian."
          );
        }
      })
      .bail(),
  ];
};

module.exports = PemasokValidatorDelete;
