const PembelianServiceReportPeriod = require("../services/PembelianServiceReportPeriod");
const PembelianServiceReportPeriodExcel = require("../services/PembelianServiceReportPeriodExcel");

const PembelianControllerReportPeriodExcel = async (req, res) => {
  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  );
  res.setHeader(
    "Content-Disposition",
    `Report Pembelian - ${req.body.startDate} sd ${req.body.endDate}.xlsx`
  );

  const results = await PembelianServiceReportPeriod(
    req.body.startDate,
    req.body.endDate,
    req.body.terms
  );

  const xlsx = await PembelianServiceReportPeriodExcel(results);
  await xlsx.write(res);
  return res.end();
};

module.exports = PembelianControllerReportPeriodExcel;
