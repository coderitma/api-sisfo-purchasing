const PembelianServiceGet = require("../services/PembelianServiceGet");
const PembelianServiceGetItemBeli = require("../services/PembelianServiceGetItemBeli");

const PembelianControllerGet = async (req, res) => {
  const pembelian = await PembelianServiceGet(
    "faktur",
    req.params.faktur,
    false
  );
  const items = await PembelianServiceGetItemBeli(
    "faktur",
    req.params.faktur,
    true
  );
  return res.status(200).json({ ...pembelian, items });
};

module.exports = PembelianControllerGet;
