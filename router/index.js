const express = require('express');
const registerUser = require('../controller/registerUser');
const loginUser = require('../controller/loginUser');

const router = express.Router();

//create user api
router.post('/register', registerUser);

router.get('/login',loginUser);

module.exports = router;