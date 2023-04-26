const BaseValidatorRun = require("../../base/validators/BaseValidatorRun");
const PembelianValidatorFields = require("./PembelianValidatorFields");

const PembelianValidatorCreate = () => {
  return [
    PembelianValidatorFields.faktur(),
    PembelianValidatorFields.tanggal(),
    PembelianValidatorFields.total(),
    PembelianValidatorFields.kodePemasok(),
    PembelianValidatorFields.dibayar(),
    PembelianValidatorFields.kembali(),
    PembelianValidatorFields.items.self(),
    PembelianValidatorFields.items.inner.kodeBarang(),
    PembelianValidatorFields.items.inner.namaBarang(),
    PembelianValidatorFields.items.inner.hargaBeli(),
    PembelianValidatorFields.items.inner.jumlahBeli(),
    PembelianValidatorFields.items.inner.subtotal(),
    BaseValidatorRun(),
  ];
};

module.exports = PembelianValidatorCreate;
