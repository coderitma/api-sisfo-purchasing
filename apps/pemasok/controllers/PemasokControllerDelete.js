const PemasokServiceDelete = require("../services/PemasokServiceDelete");

const PemasokControllerDelete = async (req, res) => {
  await PemasokServiceDelete(req.params.kodePemasok);
  return res.status(200).json();
};

module.exports = PemasokControllerDelete;
