const express = require("express");
const { registerAUser, loginUser, getAllUser, updateUser, deleteAUser } = require("../controllers/userCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const userRouter = express.Router();



// All post routes
userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);

// All get Routes
userRouter.get("/all-users", isAdmin, getAllUser);

// All put routes
userRouter.put("/update-profile",authMiddleware, updateUser);

// All Delete Routes
userRouter.delete("/:id/",authMiddleware, isAdmin, deleteAUser);

module.exports = userRouter;