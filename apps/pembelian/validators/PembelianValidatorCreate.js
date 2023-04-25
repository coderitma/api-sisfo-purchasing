const _ = require("lodash");
const { body } = require("express-validator");
const BarangServiceGet = require("../../barang/services/BarangServiceGet");
const PembelianServiceGet = require("../services/PembelianServiceGet");
const PemasokServiceGet = require("../../pemasok/services/PemasokServiceGet");

const PembelianValidatorCreate = () => {
  return [
    body("faktur")
      .notEmpty()
      .withMessage("Faktur tidak kosong.")
      .bail()
      .custom(async (value) => {
        const pembelian = await PembelianServiceGet(value);
        if (pembelian) {
          throw new Error("Faktur pembelian sudah digunakan.");
        }
      }),
    body("tanggal")
      .notEmpty()
      .withMessage("Tanggal transaksi wajib")
      .bail()
      .trim(),
    body("total")
      .notEmpty()
      .withMessage("Jumlah beli wajib.")
      .bail()
      .isInt()
      .withMessage("Total harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        if (value <= 0) {
          throw new Error("Total tidak boleh bernilai 0 atau di bawahnya.");
        }
        return true;
      })
      .withMessage("Total tidak boleh 0"),
    body("dibayar")
      .notEmpty()
      .withMessage("Dibayar wajib.")
      .bail()
      .isInt()
      .withMessage("Dibayar harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value, { req }) => {
        if (value < req.body.total) {
          throw new Error("Uang dibayar kurang.");
        }
        return true;
      }),
    body("kembali")
      .notEmpty()
      .withMessage("Kembali wajib.")
      .bail()
      .isInt()
      .withMessage("Total harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value, { req }) => {
        const calculateKembali = req.body.dibayar - req.body.total;
        if (calculateKembali < 0) {
          throw new Error("Uang kembalian tidak boleh minus.");
        } else if (calculateKembali !== value) {
          throw new Error("Uang kembalian tidak valid.");
        }

        return true;
      }),

    body("kodePemasok")
      .notEmpty()
      .withMessage("Kode pemasok wajib")
      .bail()
      .custom(async (value) => {
        const pemasok = await PemasokServiceGet(value);
        if (!pemasok) {
          throw new Error("Kode pemasok tidak tersedia.");
        }
      }),

    body("items.*.kodeBarang")
      .notEmpty()
      .withMessage("Kode barang wajib")
      .bail()
      .custom(async (value) => {
        const barang = await BarangServiceGet(value);
        if (!barang) {
          throw new Error("Kode barang tidak tersedia.");
        }
      }),

    body("items")
      .notEmpty()
      .withMessage("Item pembelian wajib.")
      .bail()
      .isArray({ min: 1 })
      .withMessage("Item harus berupa array dan minimal 1 barang di dalamnya."),

    body("items.*.namaBarang")
      .notEmpty()
      .withMessage("Nama barang wajib.")
      .bail()
      .trim()
      .isLength({
        min: 5,
      })
      .withMessage("Nama barang minimal 5 karakter.")
      .custom(async (value, { req, location, path }) => {
        const index = _.toPath(path)[1];
        const barang = await BarangServiceGet(
          req[location].items[index].kodeBarang
        );
        if (barang.namaBarang !== value) {
          throw new Error("Nama barang tidak sama dengan nama barang aslinya.");
        }
      }),
    body("items.*.hargaBeli")
      .notEmpty()
      .withMessage("Harga beli wajib.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => value <= 0)
      .withMessage("Harga beli tidak boleh 0")
      .custom(async (value, { req, location, path }) => {
        const index = _.toPath(path)[1];
        const barang = await BarangServiceGet(
          req[location].items[index].kodeBarang
        );
        if (barang.hargaBeli !== value) {
          throw new Error(
            "Harga beli barang tidak sama dengan harga beli aslinya."
          );
        }
      }),
    body("items.*.jumlahBeli")
      .notEmpty()
      .withMessage("Jumlah beli wajib.")
      .bail()
      .isInt()
      .withMessage("Jumlah beli harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => value <= 0)
      .withMessage("Jumlah beli tidak boleh 0"),
    body("items.*.subtotal")
      .notEmpty()
      .withMessage("Subtotal wajib.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        if (value <= 0) {
          throw new Error("Nilai subtotal tidak boleh 0 atau dibawahnya.");
        }
        return true;
      })
      .bail()
      .custom(async (value, { req, location, path }) => {
        const index = _.toPath(path)[1];
        const barang = await BarangServiceGet(
          req[location].items[index].kodeBarang
        );
        const calculateSubtotal =
          barang.hargaBeli * req[location].items[index].jumlahBeli;
        if (calculateSubtotal !== value) {
          throw new Error("Subtotal tidak valid.");
        }
      })
      .bail(),
  ];
};

module.exports = PembelianValidatorCreate;
