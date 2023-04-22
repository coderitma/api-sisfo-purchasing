const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", require("./apps/user/UserControllers.js"));
app.use("/barang", require("./apps/barang/BarangControllers.js"));

module.exports = app;