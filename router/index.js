const express = require('express');
const registerUser = require('../controller/registerUser');
const loginUser = require('../controller/loginUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');
const userDetails = require('../controller/userDetails');
const logout = require('../controller/logout');
const updateUserDetails = require('../controller/updateUserDetails');

const router = express.Router();

//create user api
router.post('/register', registerUser);

router.get('/login',loginUser);

router.get('/check_email',checkEmail);

router.get('/check_password',checkPassword);

router.get('/user_details',userDetails);

router.get('/logout',logout);

router.post('/update_user',updateUserDetails);

module.exports = router;