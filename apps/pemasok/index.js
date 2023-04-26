const router = require("express").Router();
const PemasokValidatorCreate = require("./validators/PemasokValidatorCreate");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");
const PemasokControllerCreate = require("./controllers/PemasokControllerCreate");
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
  [UserServiceTokenAuthentication, ...PemasokValidatorCreate()],
  PemasokControllerCreate
);

router.get(
  "/",
  [UserServiceTokenAuthentication, ...PemasokValidatorList()],
  PemasokControllerList
);

router.get(
  "/:kodePemasok",
  [UserServiceTokenAuthentication, ...PemasokValidatorGet()],
  PemasokControllerGet
);

router.put(
  "/:kodePemasok",
  [UserServiceTokenAuthentication, ...PemasokValidatorEdit()],
  PemasokControllerEdit
);

router.delete(
  "/:kodePemasok",
  [UserServiceTokenAuthentication, ...PemasokValidatorDelete()],
  PemasokControllerDelete
);

module.exports = router;
