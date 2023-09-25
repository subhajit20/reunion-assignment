const express = require("express");
const isAuthenticatedUser = require('../../middleware/auth.middleware"Invalid user"')
const { getAllProperty, getUserProperty,addProperty } = require('../../controller/propery.controller.js/property.controller');
const propertyRoute = express.Router();

propertyRoute.get('/getAllProperty', getAllProperty);
propertyRoute.get('/getUserProperty',isAuthenticatedUser, getUserProperty);
propertyRoute.post('/addProperty',isAuthenticatedUser,addProperty);

module.exports = propertyRoute;