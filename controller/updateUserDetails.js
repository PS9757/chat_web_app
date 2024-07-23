const getUserDetailsFromToken = require("../helper/getUserDetailFromToken");
const UserModel = require("../models/Usermodel");

async function updateUserDetails(req,res){
    try{
        const token = req.cookies.token || '';
        const user = await getUserDetailsFromToken(token);
        const { name, profile_pic } = req.body;
        const updateUser = await UserModel.updateOne({_id:user._id},{
            name,
            profile_pic
        });

        const userInformation = await UserModel.findById(user._id).select('-password');
        return res.status(200).json({ message: 'User Details Updated', user: userInformation, success: true });
    }catch(error){
        res.status(500).json({ message: error.message || error, error: true });
    }
}

module.exports = updateUserDetails;