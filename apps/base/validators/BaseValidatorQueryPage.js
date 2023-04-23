const { check } = require("express-validator");

const BaseValidatorQueryPage = () => {
  return check("page")
    .optional()
    .isNumeric()
    .customSanitizer((value) => parseInt(value));
};

module.exports = BaseValidatorQueryPage;
