const { param } = require("express-validator");
const BaseValidatorRun = require("../base/validators/BaseValidatorRun");
const UserServiceTokenAuthentication = require("../user/services/UserServiceTokenAuthentication");

const BarangServiceEdit = require("./services/BarangServiceEdit");
const BarangServiceGet = require("./services/BarangServiceGet");
const BarangServiceCreate = require("./services/BarangServiceCreate");
const BarangServiceList = require("./services/BarangServiceList");
const BarangServiceDelete = require("./services/BarangServiceDelete");
const BaseValidatorQueryPage = require("../base/validators/BaseValidatorQueryPage");
const BarangValidators = require("./BarangValidators");
const BarangControllers = require("express").Router();

BarangControllers.post(
  "/",
  [
    UserServiceTokenAuthentication,
    BarangValidators.kodeBarang(),
    BarangValidators.namaBarang(),
    BarangValidators.hargaBeli(),
    BarangValidators.hargaJual(),
    BarangValidators.jumlahBarang(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const barang = await BarangServiceCreate(
      req.body.kodeBarang,
      req.body.namaBarang,
      req.body.hargaBeli,
      req.body.hargaJual,
      req.body.jumlahBarang
    );
    return res.status(201).json(barang);
  }
);

BarangControllers.get(
  "/",
  [
    UserServiceTokenAuthentication,
    BaseValidatorQueryPage(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const daftarBarang = await BarangServiceList(
      req.query.terms,
      req.query.page
    );
    return res.status(200).json(daftarBarang);
  }
);

BarangControllers.get(
  "/:kodeBarang",
  [
    UserServiceTokenAuthentication,
    BarangValidators.kodeBarang(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const barang = await BarangServiceGet("kodeBarang", req.params.kodeBarang);
    return res.status(200).json(barang);
  }
);

BarangControllers.put(
  "/:kodeBarang",
  [
    UserServiceTokenAuthentication,
    BarangValidators.kodeBarang(param, false),
    BarangValidators.namaBarang(),
    BarangValidators.hargaBeli(),
    BarangValidators.hargaJual(),
    BarangValidators.jumlahBarang(),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const barang = await BarangServiceEdit(
      req.params.kodeBarang,
      req.body.namaBarang,
      req.body.hargaBeli,
      req.body.hargaJual,
      req.body.jumlahBarang
    );
    return res.status(200).json(barang);
  }
);

BarangControllers.delete(
  "/:kodeBarang",
  [
    UserServiceTokenAuthentication,
    BarangValidators.kodeBarang(param, false),
    BaseValidatorRun(),
  ],
  async (req, res) => {
    const barang = await BarangServiceDelete(req.params.kodeBarang);
    return res.status(204).json(barang);
  }
);

module.exports = BarangControllers;
