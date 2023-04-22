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
    return res.status(201).json(req.body);
  }
);

module.exports = BarangControllers;
