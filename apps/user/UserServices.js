var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const BaseServices = require("../base/BaseServices");
const UserConstants = require("./UserConstants");

const UserService = {};

UserService.create = async (firstName, lastName, email, password) => {
  const passwordHash = await bcrypt.hash(password, 10);
  await BaseServices.queryBuilder(UserConstants.USER_TABLE).insert({
    firstName,
    lastName,
    email,
    password: passwordHash,
  });

  return { firstName, lastName, email };
};

UserService.fetch = async (email) => {
  const user = (
    await BaseServices.queryBuilder(UserConstants.USER_TABLE).where(
      "email",
      email
    )
  )[0];

  return user;
};

UserService.createJWT = async (email, expiresIn = "24h") => {
  const user = await UserService.fetch(email);
  return jwt.sign(
    { firstName: user.firstName, lastName: user.lastName, email },
    process.env.TOKEN,
    {
      expiresIn,
    }
  );
};

UserService.isEmailExist = async (email) => {
  return await BaseServices.queryBuilder(UserConstants.USER_TABLE).where(
    "email",
    email
  );
};

UserService.tokenAuthentication = async (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["Authorization"];

  if (!token) {
    return res.status(401).json({
      errors: [
        {
          type: "field",
          value: token,
          msg: "Token dibutuhkan untuk otentikasi",
          path: "token",
          location: "all",
        },
      ],
    });
  }

  try {
    const decodeToken = jwt.verify(token, process.env.TOKEN);
    req.user = decodeToken;
  } catch (error) {
    return res.status(401).json({
      errors: [
        {
          type: "field",
          value: token,
          msg: "Token tidak valid",
          path: "token",
          location: "all",
        },
      ],
    });
  }

  return next();
};

module.exports = UserService;
