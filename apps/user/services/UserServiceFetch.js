const BaseServiceQueryBuilder = require("../../base/services/BaseServiceQueryBuilder");
const { USER_CONFIG_TABLE } = require("../config");

const UserServiceFetch = async (email) => {
  const user = (
    await BaseServiceQueryBuilder(USER_CONFIG_TABLE).where({
      email,
    })
  )[0];

  return user;
};

module.exports = UserServiceFetch;
