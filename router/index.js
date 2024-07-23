const express = require('express');
const registerUser = require('../controller/registerUser');
const loginUser = require('../controller/loginUser');
const checkEmail = require('../controller/checkEmail');
const checkPassword = require('../controller/checkPassword');

const router = express.Router();

//create user api
router.post('/register', registerUser);

router.get('/login',loginUser);

router.get('/check_email',checkEmail);

router.get('/check_password',checkPassword);

module.exports = router;