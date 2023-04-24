const PemasokServiceEdit = require("../services/PemasokServiceEdit");

const PemasokControllerEdit = async (req, res) => {
  return res
    .status(200)
    .json(
      await PemasokServiceEdit(
        req.params.kodePemasok,
        req.body.namaPemasok,
        req.body.alamatPemasok,
        req.body.teleponPemasok
      )
    );
};

module.exports = PemasokControllerEdit;
