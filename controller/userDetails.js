const getUserDetailsFromToken = require("../helper/getUserDetailFromToken");

async function userDetails(req, res) {
    try{
        const token = req.cookies.token || '';
        const user = await getUserDetailsFromToken(token);
        return res.status(200).json({ message: 'User Details', user: user, success: true });
    }catch(error){
        res.status(500).json({ message: error.message || error, error: true });
    }
}

module.exports = userDetails;