const router = require("express").Router();
const PemasokValidatorCreate = require("./validators/PemasokValidatorCreate");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const PemasokControllerCreate = require("./controllers/PemasokControllerCreate");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const PemasokValidatorList = require("./validators/PemasokValidatorList");
const PemasokControllerList = require("./controllers/PemasokControllerList");
const PemasokValidatorGet = require("./validators/PemasokValidatorGet");
const PemasokControllerGet = require("./controllers/PemasokControllerGet");
const PemasokValidatorEdit = require("./validators/PemasokValidatorEdit");
const PemasokControllerEdit = require("./controllers/PemasokControllerEdit");
const PemasokValidatorDelete = require("./validators/PemasokValidatorDelete");
const PemasokControllerDelete = require("./controllers/PemasokControllerDelete");

router.post(
  "/",
  [
    UserServiceTokenAuthentication,
    ...PemasokValidatorCreate(),
    BaseValidatorRun,
  ],
  PemasokControllerCreate
);

router.get(
  "/",
  [UserServiceTokenAuthentication, ...PemasokValidatorList(), BaseValidatorRun],
  PemasokControllerList
);

router.get(
  "/:kodePemasok",
  [UserServiceTokenAuthentication, ...PemasokValidatorGet(), BaseValidatorRun],
  PemasokControllerGet
);

router.put(
  "/:kodePemasok",
  [UserServiceTokenAuthentication, ...PemasokValidatorEdit(), BaseValidatorRun],
  PemasokControllerEdit
);

router.delete(
  "/:kodePemasok",
  [
    UserServiceTokenAuthentication,
    ...PemasokValidatorDelete(),
    BaseValidatorRun,
  ],
  PemasokControllerDelete
);

module.exports = router;
