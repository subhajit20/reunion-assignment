const Property = require('../../model/properties.model');

const getAllProperty = async(req, res, next) => {
    try {
        const allProperties = await Property.find();

        if (allProperties.length > 0) {
            return res.status(500).json({
                properties: allProperties
            })
        } else {
            return res.status(500).json({
                msg: "Property has not been added yet!"
            })
        }
    } catch (e) {
        return res.status(500).json({
            error: "Something went wrong!"
        })
    }
}

const getUserProperty = async(req, res, next) => {
    try {
        const allProperties = await Property.find();

        if (allProperties.length > 0) {
            return res.status(500).json({
                properties: allProperties
            })
        } else {
            return res.status(500).json({
                msg: "Property has not been added yet!"
            })
        }
    } catch (e) {
        return res.status(500).json({
            error: "Something went wrong!"
        })
    }
}

module.exports = {
    getAllProperty,
    getUserProperty
}