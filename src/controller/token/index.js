require('dotenv').config();

const controller_token = {
  create_access_token: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
        email: user.email,
        isActive: user.isActive,
      },
      process.env.ACCESS_TOKEN_KEY,
      { expiresIn: '60s' }
    );
  },
  create_refresh_token: (user) => {
    return jwt.sign(
      {
        id: user.id,
        admin: user.admin,
        email: user.email,
        isActive: user.isActive,
      },
      process.env.REFRESH_TOKEN_KEY,
      { expiresIn: '24h' }
    );
  },
};

module.exports = {
  controller_token,
};
