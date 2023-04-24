const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const PembelianControllerCreate = require("./controllers/PembelianControllerCreate");
const PembelianValidatorCreate = require("./validators/PembelianValidatorCreate");

const router = require("express").Router();

router.post(
  "/",
  [
    UserServiceTokenAuthentication,
    ...PembelianValidatorCreate(),
    BaseValidatorRun,
  ],
  PembelianControllerCreate
);

module.exports = router;
