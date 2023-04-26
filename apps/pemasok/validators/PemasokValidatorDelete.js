const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PembelianServiceGet = require("../../pembelian/services/PembelianServiceGet");
const PemasokValidatorFields = require("./PemasokValidatorFields");

const PemasokValidatorDelete = () => {
  return [
    PemasokValidatorFields.kodePemasok(
      PemasokValidatorFields.locator.param,
      false
    )
      .bail()
      .custom(async (value) => {
        const pembelian = await PembelianServiceGet("kodePemasok", value);
        console.log(value);
        if (pembelian) {
          throw new Error(
            "Kode pemasok sudah digunakan dalam beberapa transaksi pembelian."
          );
        }
      }),
    BaseValidatorRun(),
  ];
};

module.exports = PemasokValidatorDelete;
