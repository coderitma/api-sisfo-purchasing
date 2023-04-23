const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USER_CONFIG_TABLE } = require("../config");

const UserServiceIsEmailExist = async (email) => {
  const user = (
    await BaseServiceQueryBuilder(USER_CONFIG_TABLE).where({ email })
  )[0];

  return user ? true : false;
};

module.exports = UserServiceIsEmailExist;
