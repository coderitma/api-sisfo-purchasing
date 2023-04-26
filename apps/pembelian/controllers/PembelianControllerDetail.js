const PembelianServiceGet = require("../services/PembelianServiceGet");

const PembelianControllerDetail = async (req, res) => {
  return res
    .status(200)
    .json(await PembelianServiceGet("faktur", req.params.faktur));
};

module.exports = PembelianControllerDetail;
