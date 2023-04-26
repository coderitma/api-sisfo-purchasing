const { param, body, query } = require("express-validator");
const BarangServiceGet = require("../services/BarangServiceGet");

const BarangValidatorFields = {
  locator: { param, body, query },
  kodeBarang: (location = body, forCreate = true, field = "kodeBarang") => {
    return location(field)
      .notEmpty()
      .withMessage("Kode barang wajib diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const barang = await BarangServiceGet(value);
        if (forCreate && barang) {
          return Promise.reject("Kode barang sudah digunakan.");
        } else if (!forCreate && !barang) {
          return Promise.reject("Kode barang tidak tersedia.");
        }

        return Promise.resolve(value);
      });
  },
  namaBarang: (location = body, field = "namaBarang") => {
    return location(field)
      .notEmpty()
      .withMessage("Nama barang wajib diisi.")
      .bail()
      .trim()
      .isLength({ min: 5 })
      .withMessage("Nama barang minimal 5 karakter.");
  },
  hargaBeli: (location = body, field = "hargaBeli") => {
    return location(field)
      .notEmpty()
      .withMessage("Harga beli wajib diisi.")
      .bail()
      .isInt()
      .withMessage("Harga beli harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        if (value <= 0) {
          throw new Error("Harga beli harus lebih dari 0.");
        }
        return true;
      });
  },
  hargaJual: (location = body, field = "hargaJual") => {
    return location(field)
      .notEmpty()
      .withMessage("Harga jual harus diisi.")
      .bail()
      .isInt()
      .withMessage("Harga jual harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        if (value <= 0) {
          throw new Error("Harga jual harus lebih dari 0.");
        }
        return true;
      })
      .custom((value, { req }) => {
        if (value <= req.body.hargaBeli) {
          throw new Error("Harga jual harus lebih besar dari harga beli.");
        }
        return true;
      });
  },
  jumlahBarang: (location = body, field = "jumlahBarang") => {
    return location(field)
      .notEmpty()
      .withMessage("Jumlah barang harus diisi.")
      .bail()
      .isInt()
      .withMessage("Jumlah barang harus angka.")
      .bail()
      .customSanitizer((value) => parseInt(value))
      .custom((value) => {
        if (value < 1) {
          throw new Error("Jumlah barang harus di atas 0.");
        }
        return true;
      });
  },
};

module.exports = BarangValidatorFields;
