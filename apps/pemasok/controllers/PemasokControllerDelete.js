const PemasokServiceDelete = require("../services/PemasokServiceDelete");

const PemasokControllerDelete = async (req, res) => {
  return res
    .status(200)
    .json(await PemasokServiceDelete(req.params.kodePemasok));
};

module.exports = PemasokControllerDelete;
