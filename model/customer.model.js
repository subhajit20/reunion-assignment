const mongoose = require('mongoose');
const Property = require('./properties.model');

const customerScema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    customer_properties: [{
        type: mongoose.Types.ObjectId,
        ref: "Property"
    }]
})

const Customer = mongoose.model('Customer', customerScema);

module.exports = Customer;