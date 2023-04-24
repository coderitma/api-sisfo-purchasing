const BarangServiceDelete = require("../services/BarangServiceDelete");

const BarangControllerDelete = async (req, res) => {
  return res.status(204).json(await BarangServiceDelete(req.params.kodeBarang));
};

module.exports = BarangControllerDelete;
