const BarangServiceCreate = require("../services/BarangServiceCreate");

const BarangControllerCreate = async (req, res) => {
  return res
    .status(201)
    .json(
      await BarangServiceCreate(
        req.body.kodeBarang,
        req.body.namaBarang,
        req.body.hargaBeli,
        req.body.hargaJual,
        req.body.jumlahBarang
      )
    );
};

module.exports = BarangControllerCreate;
