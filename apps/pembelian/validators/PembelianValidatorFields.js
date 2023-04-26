const _ = require("lodash");
const { body, param, query } = require("express-validator");
const PemasokValidatorFields = require("../../pemasok/validators/PemasokValidatorFields");
const PembelianServiceGet = require("../services/PembelianServiceGet");
const BarangValidatorFields = require("../../barang/validators/BarangValidatorFields");
const BarangServiceGet = require("../../barang/services/BarangServiceGet");

const PembelianValidatorFields = {
  locator: { body, param, query },
  faktur: (location = body, forCreate = true, field = "faktur") => {
    return location(field)
      .notEmpty()
      .withMessage("Faktur wajib diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const pembelian = await PembelianServiceGet("faktur", value, false);
        if (forCreate && !_.isEmpty(pembelian)) {
          return Promise.reject("Faktur pembelian sudah pernah dibuat.");
        }

        if (!forCreate && _.isEmpty(pembelian)) {
          return Promise.reject("Faktur pembelian tidak ada.");
        }
      });
  },
  tanggal: (location = body, field = "tanggal") => {
    return location(field)
      .notEmpty()
      .withMessage("Tanggal transaksi wajib")
      .bail()
      .trim();
  },
  kodePemasok: (location = body, field = "kodePemasok") => {
    return PemasokValidatorFields.kodePemasok(location, false, field);
  },
  dibayar: (location = body, field = "dibayar") => {
    return location(field)
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
      });
  },
  kembali: (location = body, field = "kembali") => {
    return location(field)
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
      });
  },
  items: {
    self: (location = body, field = "items") => {
      return location(field)
        .notEmpty()
        .withMessage("Item pembelian wajib.")
        .bail()
        .isArray({ min: 1 })
        .withMessage(
          "Item harus berupa array dan minimal 1 barang di dalamnya."
        );
    },
    inner: {
      kodeBarang: (location = body, field = "items.*.kodeBarang") => {
        return BarangValidatorFields.kodeBarang(location, false, field);
      },
      namaBarang: (location = body, field = "items.*.namaBarang") => {
        return BarangValidatorFields.namaBarang(location, field)
          .bail()
          .custom(async (value, { req, location, path }) => {
            const index = _.toPath(path)[1];
            const barang = await BarangServiceGet(
              req[location].items[index].kodeBarang
            );
            if (barang.namaBarang !== value) {
              throw new Error(
                "Nama barang tidak sama dengan nama barang aslinya."
              );
            }
          });
      },
      hargaBeli: (location = body, field = "items.*.hargaBeli") => {
        return BarangValidatorFields.hargaBeli(location, field)
          .bail()
          .custom(async (value, { req, location, path }) => {
            const index = _.toPath(path)[1];
            const barang = await BarangServiceGet(
              req[location].items[index].kodeBarang
            );
            if (barang.hargaBeli !== value) {
              return Promise.reject(
                "Harga beli barang tidak sama dengan harga beli aslinya."
              );
            }

            return Promise.resolve(true);
          });
      },
      jumlahBeli: (location = body, field = "items.*.jumlahBeli") => {
        return location(field)
          .notEmpty()
          .withMessage("Jumlah beli wajib.")
          .bail()
          .isInt()
          .withMessage("Jumlah beli harus angka.")
          .bail()
          .customSanitizer((value) => parseInt(value))
          .custom((value) => {
            if (value <= 0) {
              throw new Error("Jumlah beli tidak boleh 0");
            }
            return true;
          });
      },
      subtotal: (location = body, field = "items.*.subtotal") => {
        return location(field)
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
              return Promise.reject("Subtotal tidak valid.");
            }

            return Promise.resolve(true);
          });
      },
    },
  },
  total: (location = body, field = "total") => {
    return location(field)
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
      .custom((value, { req }) => {
        let total = 0;
        for (const item of req.body.items) {
          total = total + item.subtotal;
        }

        if (total !== value) {
          throw new Error("Total tidak valid.");
        }

        return true;
      });
  },
};

module.exports = PembelianValidatorFields;
