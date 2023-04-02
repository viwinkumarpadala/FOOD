const express=require('express')
const router=express.Router()
const User=require('../Models/User')
const { body, validationResult } = require('express-validator');
const { hashpassword } = require('../utils/helpers')
const { comparepassword } = require('../utils/helpers')
const jwt=require('jsonwebtoken')
const jwtsecret="very secret"

// const newdetails = new User({
//     name: "Rummy3",
//     password: "Rummuluu",
//     email: "rummy@gmail.com",
//     location: "Kurnool"
// })

router.post('/createuser',
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password','password lenngth is too short').isLength({ min: 5 }),
    body('name').isLength({ min: 5 }),async(req,res)=>{
        console.log('req recieved')
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const password = hashpassword(req.body.password)
        await User.create({
            name:req.body.name,
            password:password,
            email:req.body.email,
            location:req.body.location,
            date:req.body.date
        }) 
       res.json({
        success:true
       }) 
    }
    catch(err){
        console.log(err)
        res.json({
            success: false
        }) 
    }
})

router.post('/login',
    // username must be an email
    body('email').isEmail(),
    // password must be at least 5 chars long
    body('password', 'password lenngth is too short').isLength({ min: 5 }), async (req, res) => {
        console.log('log req recieved')
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            let ouruser=await User.findOne({
                email: req.body.email
            })
            if(comparepassword(req.body.password,ouruser.password)){
                const data={
                    user:{
                        id:ouruser.id
                    }
                }
                const authToken=jwt.sign(data,jwtsecret)
                res.json({
                    success: true,
                    authToken:authToken,
                    name:ouruser.name,
                    location:ouruser.location,
                    email:ouruser.location,
                    text:"succesfully Logged in",
                })
            }
            else{
                res.json({
                    success:"false",
                    text:"wrong password"
                })

            }
        }
        catch (err) {
            console.log(err)
            res.json({
                success: false,
                text:"enter correct email address"
            })
        }
    })
module.exports=router