const { body } = require("express-validator");
const BarangServiceGet = require("../services/BarangServiceGet");

const BarangValidatorCreate = () => {
  return [
    body("kodeBarang")
      .notEmpty()
      .withMessage("Kode barang wajib diisi.")
      .bail()
      .trim()
      .custom(async (value) => {
        const barang = await BarangServiceGet(value);
        if (barang) {
          throw new Error("Kode barang sudah digunakan.");
        }
      }),
    body("namaBarang")
      .notEmpty()
      .withMessage("Nama barang wajib diisi.")
      .bail()
      .trim()
      .isLength({ min: 5 })
      .withMessage("Nama barang minimal 5 karakter."),
    body("hargaBeli")
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
      }),
    body("hargaJual")
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
      }),
    body("jumlahBarang")
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
      }),
  ];
};

module.exports = BarangValidatorCreate;
