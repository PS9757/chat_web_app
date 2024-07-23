const jwt = require('jsonwebtoken');
const UserModel = require('../models/Usermodel');

const getUserDetailsFromToken = async(token) => {
    if(!token){
        return {
            message : "session expired",
            logout : true,
        }
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    const user = await UserModel.findById(decode.id).select('-password');

    return user;
}

module.exports = getUserDetailsFromToken;