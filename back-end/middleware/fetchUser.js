require('dotenv').config()
const jwt = require('jsonwebtoken');

const fetchUser = (req, res, next) => {
// fetch the auth-token 
    const authToken = req.header('auth-token');
    if (!authToken) return res.status(401).send({ error: 'Please authenticate with a valid token.' });

    try {
// verify the auth-token
        const data = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
// user object contains only userID
        req.user = data.user;
        next();
    } catch (error) {
// handel if auth-token isn't valid
        if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).send({ error: 'Invalid token.' });
        }
// handel if auth-token is expired
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).send({ error: 'Token expired.' });
        }
        return res.status(500).send({ error: 'Internal server error.' });
    }
};

module.exports = fetchUser;
