const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    },
    profile_pic: {
        type: String,
        default: 'https://res.cloudinary.com/dkkgmzpqd/image/upload/v1633081965/Profile_Pictures/default_profile_pic.jpg'
    },
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel;