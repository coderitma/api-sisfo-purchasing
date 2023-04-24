const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const BarangControllerCreate = require("./controllers/BarangControllerCreate");
const BarangControllerDelete = require("./controllers/BarangControllerDelete");
const BarangControllerEdit = require("./controllers/BarangControllerEdit");
const BarangControllerGet = require("./controllers/BarangControllerGet");
const BarangControllerList = require("./controllers/BarangControllerList");
const BarangValidatorCreate = require("./validators/BarangValidatorCreate");
const BarangValidatorDelete = require("./validators/BarangValidatorDelete");
const BarangValidatorEdit = require("./validators/BarangValidatorEdit");
const BarangValidatorGet = require("./validators/BarangValidatorGet");
const BarangValidatorList = require("./validators/BarangValidatorList");

const router = require("express").Router();

router.post(
  "/",
  [
    UserServiceTokenAuthentication,
    ...BarangValidatorCreate(),
    BaseValidatorRun,
  ],
  BarangControllerCreate
);

router.get(
  "/",
  [UserServiceTokenAuthentication, ...BarangValidatorList(), BaseValidatorRun],
  BarangControllerList
);

router.get(
  "/:kodeBarang",
  [UserServiceTokenAuthentication, ...BarangValidatorGet(), BaseValidatorRun],
  BarangControllerGet
);

router.put(
  "/:kodeBarang",
  [UserServiceTokenAuthentication, ...BarangValidatorEdit(), BaseValidatorRun],
  BarangControllerEdit
);

router.delete(
  "/:kodeBarang",
  [
    UserServiceTokenAuthentication,
    ...BarangValidatorDelete(),
    BaseValidatorRun,
  ],
  BarangControllerDelete
);

module.exports = router;
