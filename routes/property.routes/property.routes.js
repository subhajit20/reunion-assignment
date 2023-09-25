const express = require("express");
const isAuthenticatedUser = require('../../middleware/auth.middleware"Invalid user"')
const { getAllProperty, getUserProperty,addProperty,updateProperty,deletProperty } = require('../../controller/propery.controller.js/property.controller');
const propertyRoute = express.Router();

propertyRoute.get('/getAllProperty', getAllProperty);
propertyRoute.get('/getUserProperty',isAuthenticatedUser, getUserProperty);
propertyRoute.post('/addProperty',isAuthenticatedUser,addProperty);
propertyRoute.patch('/updateProperty',isAuthenticatedUser,updateProperty);
propertyRoute.delete('/deleteProperty',isAuthenticatedUser,deletProperty);

module.exports = propertyRoute;