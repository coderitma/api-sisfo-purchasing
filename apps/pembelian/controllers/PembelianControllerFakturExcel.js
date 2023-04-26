// PembelianControllerFakturExcel.js

const PembelianServiceFakturExcel = require("../services/PembelianServiceFakturExcel");

const PembelianControllerFakturExcel = async (req, res) => {
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `${req.params.faktur}-${new Date().getTime()}.xlsx`
  );

  const xlsx = await PembelianServiceFakturExcel(req.params.faktur);
  await xlsx.write(res);
  return res.end();
};

module.exports = PembelianControllerFakturExcel;
