const bcrypt = require('bcryptjs');
const UserModel = require('../models/Usermodel');
const { model } = require('mongoose');

async function loginUser(req, res) {
    console.log('loginUser',req.body);
    try {
        const { email, password } = req.body;
        const user = await UserModel
            .findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist', error: true });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials', error: true });
        }
        //seprate the password from the user object
        user.password = undefined;
        res.status(200).json({ user });
    }
    catch (error) {
        res.status(400).json({ message: error.message || error, error: true });
    }
}

module.exports = loginUser;