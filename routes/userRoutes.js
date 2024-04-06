const express = require("express");
const { registerAUser, loginUser } = require("../controllers/userCtrl");
const userRouter = express.Router();

userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);



module.exports = userRouter;