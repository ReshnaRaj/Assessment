const express = require('express');
const { register, verifyOtp } = require('../Controller/UserController');
const router = express.Router()

router.post('/register',register)
router.post('/verify-otp',verifyOtp)
 
// router.post('/signin',sigin)
module.exports=router;