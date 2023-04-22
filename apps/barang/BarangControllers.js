const UserService = require("../user/UserServices");
const BarangServices = require("./BarangServices");
const BarangValidators = require("./BarangValidators");

const BarangControllers = require("express").Router();

BarangControllers.post(
  "/",
  [UserService.tokenAuthentication, ...BarangValidators.create],
  async (req, res) => {
    return res
      .status(201)
      .json(
        await BarangServices.create(
          req.body.kodeBarang,
          req.body.namaBarang,
          req.body.hargaBeli,
          req.body.hargaJual,
          req.body.jumlahBarang
        )
      );
  }
);

BarangControllers.get(
  "/",
  [UserService.tokenAuthentication, ...BarangValidators.list],
  async (req, res) => {
    return res
      .status(200)
      .json(await BarangServices.fetchAll(req.query.terms, req.query.page));
  }
);

BarangControllers.get(
  "/:kodeBarang",
  [UserService.tokenAuthentication, ...BarangValidators.detail],
  async (req, res) => {
    return res
      .status(200)
      .json(await BarangServices.fetch(req.params.kodeBarang));
  }
);

BarangControllers.put(
  "/:kodeBarang",
  [UserService.tokenAuthentication, ...BarangValidators.edit],
  async (req, res) => {
    return res
      .status(200)
      .json(
        await BarangServices.edit(
          req.params.kodeBarang,
          req.body.namaBarang,
          req.body.hargaBeli,
          req.body.hargaJual,
          req.body.jumlahBarang
        )
      );
  }
);

module.exports = BarangControllers;
