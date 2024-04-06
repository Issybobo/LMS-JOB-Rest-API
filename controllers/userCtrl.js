const User = require("../models/userModel");

const asyncHandler = require("express-async-handler");

// Create a user

const registerAUser = asyncHandler( async (req, res) => {

    // Get the email from req.body and find wheater the user with the email exists or not
    const email = req.body.email;
    
    // find the user with this emai get from req.body
    const findUser = await User.findOne({email: email});

    if(!findUser){
        // create a user
        const createUser = await User.create(req.body);
        res.status(200).json({
            status: true,
            message: "User Created Succesfully",
            createUser
        });

    } else{
        throw new Error ("User Already Exist");
    }
});

// Login a User

const loginUser = asyncHandler(async (req, res) => {
    
})




module.exports = {registerAUser};