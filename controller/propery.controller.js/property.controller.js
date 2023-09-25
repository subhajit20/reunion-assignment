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
        const allUserProperties = await Property.find({
            customerId:req.id
        });

        if (allUserProperties.length > 0) {
            return res.status(500).json({
                properties: allUserProperties
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

const updateProperty = async (res,res,next) =>{
    try{
        const {
            propertyId,
            Property_Name,
            Property_Price,
            beds,
            bathrooms,
            location
        } = req.body;

            const isProperty = Property.find({
                propertyId:propertyId,
            });

            if(isProperty){
                isProperty.Property_Name = Property_Name,
                isProperty.Property_Price = Property_Price,
                isProperty.beds = beds;
                isProperty.bathrooms = bathrooms;
                isProperty.location = location;
                isProperty.save();

                return res.status(200).json({
                    msg:"Property updated successfully",
                })
            }else{
                return res.status(200).json({
                    msg:"Property not found",
                })
            }
    }catch(e){
        return res.status(300).json({
            error:"Invalid user"
        })
    }
}

const deletProperty = async (req,res,next) =>{
    try{
        const {
            propertyId,
        } = req.body;

        const isCustomer = await Customer.findOne({
            email:req.email
        });

        if(isCustomer){
                isCustomer.customer_properties.pull(propertyId);
                isCustomer.save();

                await Property.deleteOne({
                    propertyId:propertyId,
                });

                return res.status(200).json({
                    msg:"Property deleted successfully",
                })
            }else{
                return res.status(200).json({
                    msg:"Property not found",
                })
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
    addProperty,
    updateProperty,
    updateProperty,
    deletProperty
}