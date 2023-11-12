const express = require('express')
const router = express.Router()
const {getOtp,signup}=require('../Controller/UserController')
router.post('/signup',getOtp)
router.post('/verify-otp',signup)
// router.post('/signin',sigin)
module.exports=router;