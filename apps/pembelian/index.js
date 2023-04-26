const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const PembelianControllerCreate = require("./controllers/PembelianControllerCreate");
const PembelianControllerFakturExcel = require("./controllers/PembelianControllerFakturExcel");
const PembelianControllerList = require("./controllers/PembelianControllerList");
const PembelianControllerReportPeriodExcel = require("./controllers/PembelianControllerReportPeriodExcel");
const PembelianValidatorCreate = require("./validators/PembelianValidatorCreate");
const PembelianValidatorFakturExcel = require("./validators/PembelianValidatorFakturExcel");
const PembelianValidatorList = require("./validators/PembelianValidatorList");
const PembelianValidatorReportPeriodExcel = require("./validators/PembelianValidatorReportPeriodExcel");
const PembelianControllerGet = require("./controllers/PembelianControllerGet");
const PembelianValidatorGet = require("./validators/PembelianValidatorGet");

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
  [UserServiceTokenAuthentication, ...PembelianValidatorGet()],
  PembelianControllerGet
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
