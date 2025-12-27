const bcrypt = require('bcrypt');
const { Users } = require('../../db/models');
const { controller_token } = require('../token');
const controller_auth = {
  SignIn: async (req, res) => {
    try {
      const { email, password } = req.body;

      const admin = await Users.findOne({ where: { email } });
      if (!admin) return res.status(404).json({ error: 'User không tồn tại' });

      return res
        .status(200)
        .json({ mess: 'Đăng nhập thành công', user: admin });
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  SignOut: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  SignUp: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Authen: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  ChangePass: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  ForgotPass: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  RefreshToken: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  Settings: async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json(error);
    }
  },
};

module.exports = {
  controller_auth,
};
