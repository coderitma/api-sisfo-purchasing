const PemasokServiceGet = require("../services/PemasokServiceGet");

const PemasokControllerGet = async (req, res) => {
  return res.status(200).json(await PemasokServiceGet(req.params.kodePemasok));
};

module.exports = PemasokControllerGet;
