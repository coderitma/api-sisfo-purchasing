var bcrypt = require("bcryptjs");
const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USER_CONFIG_TABLE } = require("../config");

const UserServiceRegister = async (firstName, lastName, email, password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  await BaseServiceQueryBuilder(USER_CONFIG_TABLE).insert({
    firstName,
    lastName,
    email,
    password: passwordHash,
  });

  return { firstName, lastName, email };
};

module.exports = UserServiceRegister;
