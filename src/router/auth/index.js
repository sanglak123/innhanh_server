const { controller_auth } = require('../../controller/auth');

const router_auth = require('express').Router();

router_auth.get('/authen', controller_auth.Authen);

router_auth.post('/sign-in', controller_auth.SignIn);

router_auth.put('/sign-out', controller_auth.SignOut);

router_auth.post('/sign-up', controller_auth.SignUp);

router_auth.put('/change-password', controller_auth.ChangePass);

router_auth.post('/fogot-password', controller_auth.ForgotPass);

router_auth.get('/refresh-token', controller_auth.RefreshToken);

router_auth.put('/settings', controller_auth.Settings);

module.exports = {
  router_auth,
};
