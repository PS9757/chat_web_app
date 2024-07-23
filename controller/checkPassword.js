const UserModel = require("../models/Usermodel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

async function checkPassword(req, res) {
    try{
        const { userId, password } = req.body;
        const user = await UserModel.findById(userId);
        const verifyPassword = await bcrypt.compare(password,user.password);
        if(!verifyPassword){
            res.status(400).json({ message: 'Invalid Password', error: true });
        }
        const tokenData = {
            id : user._id,
            email : user.email,
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
        const cookieOptions = {
            http: true,
            secure : true,
        }
        return res.cookie('token',token,cookieOptions).status(200).json({ message: 'Login Successfully', token: token, success: true });
    }catch(error){
        res.status(500).json({ message: error.message || error, error: true });
    }
}

module.exports = checkPassword;