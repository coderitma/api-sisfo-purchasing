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

BaseServices.paginator = async (page, queryBuilder) => {
  page = page ? page : 1;
  const limit = parseInt(process.env.PAGE_LIMIT || 10);
  const offset = (page - 1) * limit;

  const total = await queryBuilder.clone().count("* as count").first();
  const results = await queryBuilder.clone().limit(limit).offset(offset);

  const numberOfPage = Math.ceil(total.count / limit);
  const next = page + 1 > numberOfPage ? null : page + 1;
  const prev = page - 1 <= 0 ? null : page - 1;

  return {
    page,
    next,
    prev,
    numberOfPage,
    total: total.count,
    results,
  };
};

module.exports = BaseServices;
