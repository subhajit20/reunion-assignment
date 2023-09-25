const jwt = require('jsonwebtoken');

const isAuthenticatedUser = async (req,res,next) =>{
    try{
        const {access_token} = req.header;
        console.log(access_token);
        const isValidToken = await jwt.verify(access_token,process.env.JWT_SECRET);

        if(isValidToken){
            req.email = isValidToken.email;
            next();
        }else{
            throw "Invalid token..."
        }
    }catch(e){
        return res.status(500).json({
            error:"Token is not found"
        })
    }
}

module.exports = isAuthenticatedUser;