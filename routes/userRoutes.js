const express = require("express");
const { registerAUser, loginUser, getAllUser } = require("../controllers/userCtrl");
const userRouter = express.Router();


// All post routes
userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);

// All get Routes
userRouter.get("/all-users", getAllUser);



module.exports = userRouter;