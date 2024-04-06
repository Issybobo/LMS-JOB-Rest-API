const User = require("../models/userModel");
const { generateToken } = require("../config/jwtToken");

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
    const {email, password} = req.body;
    // check if user exist or not

    const findUser = await User.findOne({email: email});
    if(findUser && (await findUser.isPasswordMatched(password))) {
        res.status(200).json({
            status: true,
            message: "Logged in Succesfully",
            token: generateToken(findUser?._id),
            role: findUser?.roles,
            username: findUser?.firstName + " " + findUser?.lastName,
            user_image: findUser?.user_image,
        });

    } else{
        throw new Error("Invalid Credentials");

    }

})

// Get All Users 

const getAllUser = asyncHandler(async (req, res) => {
    try {
        const allUser = await User.find();
        res.status(200).json({
            status: true,
            message: "All Users Fetched Succesfully", allUser
            
        })
    } catch (error) {
        throw new Error(error)
        
    }
})

// Update a user profile 




module.exports = {registerAUser, loginUser, getAllUser};