async function logout(req,res) {
    try{
        cookieOption = {
            http: true,
            secure : true,
        }
        return res.cookie('token','',cookieOption).status(200).json({ message: 'User logged out', success: true });
    }catch(error){
        res.status(500).json({ message: error.message || error, error: true });
    }
}

module.exports = logout;