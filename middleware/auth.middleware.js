const jwt = require('jsonwebtoken');

const isAuthenticatedUser = async (req,res,next) =>{
    try{
        const {access_token} = req.headers['authorization'];
        console.log(access_token);
        const mainToken = userToken.split(' ')[1];
        const isValidToken = await jwt.verify(mainToken,process.env.JWT_SECRET);

        if(isValidToken){
            req.email = isValidToken.email;
            next();
        }else{
            throw "Invalid token..."
        }
    }catch(e){
        return res.status(500).json({
            error:"Token is invalid"
        })
    }
}

module.exports = isAuthenticatedUser;