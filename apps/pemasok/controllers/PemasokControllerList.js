const PemasokServiceList = require("../services/PemasokServiceList");

const PemasokControllerList = async (req, res) => {
  return res
    .status(200)
    .json(await PemasokServiceList(req.query.terms, req.query.page));
};

module.exports = PemasokControllerList;
