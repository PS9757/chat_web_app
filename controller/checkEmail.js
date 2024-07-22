const UserModel = require("../models/Usermodel");

async function checkEmail(req, res) {
    try{
        const { email } = req.body;
        const user = await UserModel.findOne({ email});
        if(!user){
            res.status(400).json({ message: 'User already exists', error: true });
        }
        user.password = undefined;
        res.status(200).json({ message: 'Email is available', error: false ,data : user});
    }catch(error){
        res.status(500).json({ message: error.message || error, error: true });
    }
}

module.exports = checkEmail;