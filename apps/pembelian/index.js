const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const PembelianControllerCreate = require("./controllers/PembelianControllerCreate");
const PembelianControllerFakturExcel = require("./controllers/PembelianControllerFakturExcel");
const PembelianValidatorCreate = require("./validators/PembelianValidatorCreate");
const PembelianValidatorFakturExcel = require("./validators/PembelianValidatorFakturExcel");

const router = require("express").Router();

router.post(
  "/",
  [UserServiceTokenAuthentication, ...PembelianValidatorCreate()],
  PembelianControllerCreate
);

router.post(
  "/:faktur/faktur-excel",
  [UserServiceTokenAuthentication, ...PembelianValidatorFakturExcel()],
  PembelianControllerFakturExcel
);

module.exports = router;
