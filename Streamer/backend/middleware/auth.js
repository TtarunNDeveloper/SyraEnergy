const jwt = require('jsonwebtoken');
const auth = (req, res, next)=> {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({ message: 'No token, authorization denied '});
    }
    try{
        const decoded=jwt.verify(token, process.env.SECRET_KEY);
        req.user=decoded.user;
        next();
    }catch(error){
        res.status(401).json({ message: 'Token is not valid' });
    }
};
module.exports = auth;