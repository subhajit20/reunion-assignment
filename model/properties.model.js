const mongoose = require('mongoose');
const { stringify } = require('querystring');

const propertScema = new mongoose.Schema({
    Property_Name: {
        type: String,
        required: true,
        trim: true
    },
    Property_Price: {
        type: String,
        trim: true
    },
    location: {
        type: String,
        trim: true
    },
    beds: {
        type: String,
        trim: true
    },
    bathrooms: {
        type: String,
        trim: true
    },
    userId:{
        type:mongoose.Types.ObjectId,
        ref:'Customer'
    }
})

const Property = mongoose.model('Property', propertScema);

module.exports = Property;