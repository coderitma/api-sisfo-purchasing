const BaseValidations = {};

BaseValidations.validateQueryPage = () =>
  query("page")
    .optional()
    .isNumeric()
    .customSanitizer((value) => parseInt(value));

module.exports = BaseValidations;
