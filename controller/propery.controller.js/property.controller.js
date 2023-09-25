const Property = require('../../model/properties.model');
const Customer = require('../../model/customer.model');

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

const addProperty = async (res,res,next) =>{
    try{
        const isCustomer = await Customer.findOne({
            email:req.email
        })
        if(isCustomer){
            const newProperty = new Property({...req.body,userId:isCustomer._id});
            newProperty.save();

            isCustomer.customer_properties.push(newProperty._id);
            isCustomer.save();

            return res.status(200).json({
                msg:"Property created succesfully..."
            })
        }else{
            throw "Invalid user";
        }
    }catch(e){
        return res.status(300).json({
            error:"Invalid user"
        })
    }
}

module.exports = {
    getAllProperty,
    getUserProperty,
    addProperty
}