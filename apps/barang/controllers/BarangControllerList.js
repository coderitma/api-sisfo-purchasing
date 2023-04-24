const BarangServiceList = require("../services/BarangServiceList");

const BarangControllerList = async (req, res) => {
  return res
    .status(200)
    .json(await BarangServiceList(req.query.terms, req.query.page));
};

module.exports = BarangControllerList;
