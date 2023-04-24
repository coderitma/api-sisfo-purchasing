const PemasokValidatorCreate = require("./PemasokValidatorCreate");
const PemasokValidatorGet = require("./PemasokValidatorGet");

const PemasokValidatorEdit = () => {
  const [, ...pemasokValidatorCreate] = PemasokValidatorCreate();
  return [PemasokValidatorGet(), ...pemasokValidatorCreate];
};

module.exports = PemasokValidatorEdit;
