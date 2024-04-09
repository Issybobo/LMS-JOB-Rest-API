const express = require("express");
const { registerAUser,
     loginUser,
      getAllUser,
       updateUser, 
       deleteAUser, 
       getAUser, 
       blockUser ,
       unblockUser,
       updatePassword,
       forgotPasswordToken,
       resetPassword
    } = require("../controllers/userCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");
const userRouter = express.Router();



// All post routes
userRouter.post("/register", registerAUser);
userRouter.post("/login", loginUser);
userRouter.post("/forgot-password", forgotPasswordToken);

// All get Routes
userRouter.get("/all-users", isAdmin, getAllUser);
userRouter.get("/:id", authMiddleware, getAUser);

// All put routes
userRouter.put("/update-profile",authMiddleware, updateUser);
userRouter.put("/block/:id",authMiddleware, isAdmin, blockUser);
userRouter.put("/unblock/:id",authMiddleware, isAdmin, unblockUser);
userRouter.put("/update-password",authMiddleware, updatePassword);
userRouter.put("/reset-password/:token", resetPassword);


// All Delete Routes
userRouter.delete("/:id/",authMiddleware, isAdmin, deleteAUser);

module.exports = userRouter;