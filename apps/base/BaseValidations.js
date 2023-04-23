const { check } = require("express-validator");

const BaseValidations = {};

BaseValidations.validateQueryPage = () =>
  check("page")
    .optional()
    .isNumeric()
    .customSanitizer((value) => parseInt(value));

module.exports = BaseValidations;
