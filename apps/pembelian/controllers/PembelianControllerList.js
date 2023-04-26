const PembelianServiceList = require("../services/PembelianServiceList");

const PembelianControllerList = async (req, res) => {
  return res
    .status(200)
    .json(await PembelianServiceList(req.query.terms, req.query.page));
};

module.exports = PembelianControllerList;
