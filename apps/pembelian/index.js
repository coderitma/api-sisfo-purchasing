const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const PembelianControllerCreate = require("./controllers/PembelianControllerCreate");
const PembelianControllerDetail = require("./controllers/PembelianControllerDetail");
const PembelianControllerFakturExcel = require("./controllers/PembelianControllerFakturExcel");
const PembelianControllerList = require("./controllers/PembelianControllerList");
const PembelianControllerReportPeriodExcel = require("./controllers/PembelianControllerReportPeriodExcel");
const PembelianValidatorCreate = require("./validators/PembelianValidatorCreate");
const PembelianValidatorDetail = require("./validators/PembelianValidatorDetail");
const PembelianValidatorFakturExcel = require("./validators/PembelianValidatorFakturExcel");
const PembelianValidatorList = require("./validators/PembelianValidatorList");
const PembelianValidatorReportPeriodExcel = require("./validators/PembelianValidatorReportPeriodExcel");

const router = require("express").Router();

router.post(
  "/",
  [UserServiceTokenAuthentication, ...PembelianValidatorCreate()],
  PembelianControllerCreate
);

router.get(
  "/",
  [UserServiceTokenAuthentication, ...PembelianValidatorList()],
  PembelianControllerList
);

router.get(
  "/:faktur",
  [UserServiceTokenAuthentication, ...PembelianValidatorDetail()],
  PembelianControllerDetail
);

router.post(
  "/:faktur/faktur-excel",
  [UserServiceTokenAuthentication, ...PembelianValidatorFakturExcel()],
  PembelianControllerFakturExcel
);

router.post(
  "/report-period-excel",
  [UserServiceTokenAuthentication, ...PembelianValidatorReportPeriodExcel()],
  PembelianControllerReportPeriodExcel
);

module.exports = router;
