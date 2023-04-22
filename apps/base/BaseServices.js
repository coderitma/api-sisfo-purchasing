const { validationResult } = require("express-validator");

const BaseServices = {};

BaseServices.queryBuilder = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "db_pembelian",
  },
});

BaseServices.executeValidator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });
  next();
};

module.exports = BaseServices;
