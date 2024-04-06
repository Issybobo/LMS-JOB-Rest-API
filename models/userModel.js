const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

let userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    }, 
    lastName: {
        type: String,
        required: true,
    }, 
    user_image: {
        type: String,
        default: "https://www.google.com/imgres?q=user%20image&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F178%2F595%2Fpng-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fen%2Fsearch%3Fq%3Duser&docid=8Qj_3LCalWAqLM&tbnid=HRpXPjhOPcdOrM&vet=12ahUKEwjelIil8q2FAxXKV0EAHTlyCEQQM3oECBQQAA..i&w=360&h=361&hcb=2&ved=2ahUKEwjelIil8q2FAxXKV0EAHTlyCEQQM3oECBQQAA"
    }, 



    email: {
        type: String,
        required: true,
        unique: true,
        index: true,
    }, 

    mobile: {
        type: String,
        required: true,
        unique: true,
        index: true,
    }, 

    password: {
        type: String,
        required: true,
        
    }, 

    roles: {
        type: String,
        default: "user",
    },

    profession: {
        type: String,
        required: true
    },

    isBlocked: {
        type: Boolean,
        default: false,
    },

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    stripe_account_id: String,
    stripe_seller: {},
    stripeSession: {},
},
{
    timestamps: true,
}
);

userSchema.pre("save", async function( next){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

module.exports = mongoose.model("LmsUser", userSchema);