const mongoose = require("mongoose");

const dbConnect = () => {
    try {
        const connection = mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Succesfully");
        
    } catch (error) {
        console.log(error);
        
    }
}
module.exports = dbConnect;