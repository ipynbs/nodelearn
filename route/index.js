const express = require('express');
const router = express.Router();
const {User} = require('../model/db')

router.get('/',(req,res,next)=>{
    const users = User.findAll()
    res.render('index',{users});
})

module.exports = router;