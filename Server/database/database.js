const mongoose = require("mongoose");

exports.connectiontoDatabase = async()=>{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected sucessfully");

}