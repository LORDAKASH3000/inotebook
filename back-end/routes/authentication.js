require('dotenv').config()
const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const fetchUser = require('../middleware/fetchUser');

// Route1: Creating user
router.post('/signup',
// field validations
    body('name', 'Name must be atleast 1 character long').isLength({min: 1}),
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password must contain minimum 8 characters').isLength({min: 8}),
    async (req, res)=>{

// check if there are any field errors, if any return bad request
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

// check if any users are already exists with this email
        const {name, email, password} = req.body;
        try {
            let user = await User.findOne({email});
            if(user)return res.status(400).json({ error: "User with this email already exists." });
    
// password salting
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(password, salt);
    
// creating new user
            user = await User.create({ 
                "name": name,
                "password": secPass,
                "email": email
            });
    
// JWT token
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);
    
            res.json({authToken})
        } catch (error) {
            res.status(500).send("Internal server error")
        }

    }
)

// Route2: Authenticate user
router.post('/signin',
// field validations
    body('email', 'Invalid email').isEmail(),
    body('password', 'Password must contain minimum 8 characters').isLength({min: 8}),
    async (req, res)=>{

// check if there are any field errors, if any return bad request
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

        try{
// Check if any users exist with this email.
            const {email, password} = req.body;
            let user = await User.findOne({email});
            if(!user) return res.status(400).json({ error: "Incorrect login credentials." });

// checking for correct password
            const finalPassword = await bcrypt.compare(password, user.password);
            if(!finalPassword) return res.status(400).json({ error: "Incorrect login credentials." });

// JWT token
            const data = {
                user: {
                    id: user.id
                }
            }
            const authToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET);

            res.json({authToken})
        } catch (error) {
            res.status(500).send("Internal server error")
        }
    }
)

// Route3: Get Logedin user details
router.post('/getuser',
// authorization of token and fetching user id
    fetchUser,
    async (req, res)=>{
        try {
// fetching user
            const user = await User.findById(req.user.id);
            res.send(user);
        } catch (error) {
            res.status(500).send("Internal server error")
        }
    }
)

module.exports = router;