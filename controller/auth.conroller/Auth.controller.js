const Customer = require('../../model/customer.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const loginController = async (req, res,next) => {
    try {
        const {email,password} = req.body;
        const checkUserExist = await Customer.findOne({
            email:email,
        });

        if(checkUserExist){
            const isValidPassword = await bcrypt.compare(password,process.env.PASSWORD_SALT);

            if(isValidPassword){
                const token = await jwt.sign({
                    email:email,
                    id:checkUserExist._id
                },process.env.JWT_SECRET,{
                    expiresIn:'1m'
                })

                return res.status(200).json({
                    customer:checkUserExist,
                    access_token:token
                })
            }
            throw 'Invalid email and password'
        }else{
            throw 'Invalid email and password'
        }
        
    } catch (e) {
        return req.status(500).json({
            error:e
        })
    }
}

const signupController = async (req, res, next) => {
    try {
        const {email,password} = req.body;
        const checkUserExist = await Customer.findOne({
            email:email
        });

        if(checkUserExist){
            return res.status(300).json({
                error:"Customer alreday exist..."
            })
        }else{
            const hashedPassword = await bcrypt.hash(password,process.env.PASSWORD_SALT);

            const newUser = new Customer({
                ...req.body,
                password:hashedPassword,
            })
            newUser.save();



            return req.status(200).json({
                msg:"Account created successfully...",
                userDetails:newUser
            })
        }
        
    } catch (e) {
        return req.status(500).json({
            error:"Something went wrong..."
        })
    }
}

module.exports = {
    signupController,
    loginController
}