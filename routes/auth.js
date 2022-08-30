const router = require("express").Router();
const User = require("../models/User");
var bcrypt = require("bcrypt");
require("dotenv").config();
const { authSchema } = require('../helpers/validationSchema')
const jwt = require("jsonwebtoken");


//REGISTER
router.post("/register", bodyparser.urlencoded({ extended: false }), async(req, res) => {
    const result = authSchema.validateAsync(req.body)
    if(result.error == null){
        const userData = new User({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 8),
            isAdmin: Boolean(req.body.isAdmin),
            isModerator: Boolean(req.body.isModerator)
        })

        try {
            const user = await userData.save();
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("Inputs are not allowed!");
    }
})

//LOGIN
router.post("/login", bodyparser.urlencoded({ extended: false }), async(req, res) => {

        const user = await User.findOne({ email: req.body.email });

        if(user){
            var passwordIsValid = bcrypt.compare(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401)
                    .send({
                        accessToken: null,
                        message: "Invalid Password!"
                    });
            }
            const accessToken = jwt.sign(
                {id: user._id, isAdmin: user.isAdmin, isModerator: user.isModerator},
                process.env.SECRET_KEY,
                {expiresIn: "5d"}
            )
    
            const { password, ...other } = user._doc;
            res.status(200).json({...other, accessToken});
        }else{
            !user && res.status(401).json("User not found!");
        }
})

module.exports = router;
