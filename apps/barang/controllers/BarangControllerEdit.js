const BarangServiceEdit = require("../services/BarangServiceEdit");

const BarangControllerEdit = async (req, res) => {
  return res
    .status(200)
    .json(
      await BarangServiceEdit(
        req.params.kodeBarang,
        req.body.namaBarang,
        req.body.hargaBeli,
        req.body.hargaJual,
        req.body.jumlahBarang
      )
    );
};

module.exports = BarangControllerEdit;
