const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

app.use("/user", require("./apps/user"));
app.use("/barang", require("./apps/barang"));
app.use("/pemasok", require("./apps/pemasok"));

module.exports = app;
