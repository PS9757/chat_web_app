const bcrypt = require('bcryptjs');
const UserModel = require('../models/Usermodel');
const { model } = require('mongoose');

async function registerUser(req, res) {
    console.log('registerUser',req.body);
    try {
        const { name, email, password, profile_pic } = req.body;
        const userExists = await UserModel.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists', error: true });
        } 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await UserModel.create({ 
            email, 
            password: hashedPassword, 
            name, 
            profile_pic,
        });
        res.status(201).json({ user });
    } catch (error) {
        res.status(400).json({ message: error.message || error, error: true });
    }

}
module.exports = registerUser;
