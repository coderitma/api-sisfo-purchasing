const PembelianServiceCreate = require("../services/PembelianServiceCreate");

const PembelianControllerCreate = async (req, res) => {
  res
    .status(201)
    .json(
      await PembelianServiceCreate(
        req.body.faktur,
        req.body.tanggal,
        req.body.total,
        req.body.dibayar,
        req.body.kembali,
        req.body.kodePemasok,
        req.body.items
      )
    );
};

module.exports = PembelianControllerCreate;
