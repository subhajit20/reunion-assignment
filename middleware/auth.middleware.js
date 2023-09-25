const jwt = require('jsonwebtoken');

const isAuthenticatedUser = async(req, res, next) => {
    try {
        const access_token = req.headers['authorization'];
        const mainToken = access_token.split(' ')[1];
        const isValidToken = await jwt.verify(mainToken, process.env.JWT_SECRET);

        console.log(isValidToken);

        if (isValidToken) {
            req.email = isValidToken.email;
            req.id = isValidToken.id;
            next();
        } else {
            throw "Invalid token..."
        }
    } catch (e) {
        return res.status(500).json({
            error: "Token is invalid"
        })
    }
}

module.exports = isAuthenticatedUser;