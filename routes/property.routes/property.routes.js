const express = require("express");
const { getAllProperty, getUserProperty } = require('../../controller/propery.controller.js/property.controller');
const propertyRoute = express.Router();

propertyRoute.get('/getAllProperty', getAllProperty);
propertyRoute.get('/getUserProperty', getUserProperty);

module.exports = propertyRoute;