const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userGmail: {
        type: String,
        required: [true, "User gmail must be provided"],
        unique: true,
        lowercase: true
    },
    role: {
        type: String,
        enum: ["customer", "provider"],
        default: "customer"
    },
    password: {
        type: String,
        required: [true, "Password must be provided"]
    },
    confirmPassword: {
        type: String,
        required: [true, "Confirm password must be provided"]
    },
    fullName: {
        type: String,
        required: [true, "Full name must be provided"]
    },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
