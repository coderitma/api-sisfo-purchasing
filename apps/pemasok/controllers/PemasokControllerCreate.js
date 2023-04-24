const PemasokServiceCreate = require("../services/PemasokServiceCreate");

const PemasokControllerCreate = async (req, res) => {
  return res
    .status(201)
    .json(
      await PemasokServiceCreate(
        req.body.kodePemasok,
        req.body.namaPemasok,
        req.body.alamatPemasok,
        req.body.teleponPemasok
      )
    );
};

module.exports = PemasokControllerCreate;
