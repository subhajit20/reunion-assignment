const jwt = require('jsonwebtoken');

const isAuthenticatedUser = (req,res,next) =>{
    try{
        const {access_token} = req.header;
        console.log(access_token);

        next();
    }catch(e){
        return res.status(500).json({
            error:"Token is not found"
        })
    }
}

module.exports = isAuthenticatedUser;