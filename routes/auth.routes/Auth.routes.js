const express = require("express");
const authRoute = express.Router();
const {signupController,loginController} = require('../../controller/auth.conroller/Auth.controller');

authRoute.post('/signup',signupController);
authRoute.post('/login',loginController);


module.exports = authRoute;