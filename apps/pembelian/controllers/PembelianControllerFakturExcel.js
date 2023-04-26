// PembelianControllerFakturExcel.js

const PemasokServiceGet = require("../../pemasok/services/PemasokServiceGet");
const PembelianServiceFakturExcel = require("../services/PembelianServiceFakturExcel");
const PembelianServiceGet = require("../services/PembelianServiceGet");
const PembelianServiceGetItemBeli = require("../services/PembelianServiceGetItemBeli");

const PembelianControllerFakturExcel = async (req, res) => {
  const pembelian = await PembelianServiceGet(
    "faktur",
    req.params.faktur,
    false
  );

  const pemasok = await PemasokServiceGet("kodePemasok", pembelian.kodePemasok);
  const items = await PembelianServiceGetItemBeli(
    "faktur",
    req.params.faktur,
    true
  );

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `${req.params.faktur}-${new Date().getTime()}.xlsx`
  );

  const xlsx = await PembelianServiceFakturExcel(pembelian, pemasok, items);
  await xlsx.write(res);
  return res.end();
};

module.exports = PembelianControllerFakturExcel;
