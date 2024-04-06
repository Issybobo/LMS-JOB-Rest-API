const express = require("express");
const { registerAUser, loginUser, getAllUser, updateUser } = require("../controllers/userCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const userRouter = express.Router();



// All post routes
userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);

// All get Routes
userRouter.get("/all-users", isAdmin, getAllUser);

// All put routes
userRouter.put("/update-profile",authMiddleware, updateUser);



module.exports = userRouter;