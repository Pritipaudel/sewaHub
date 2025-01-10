const User = require("../../model/userModel");
const bcrypt = require("bcryptjs");

const userRegister = async (req, res) => {
    const { userGmail, password, confirmPassword, role,fullName } = req.body;

    // Validate required fields
    if (!userGmail || !password || !confirmPassword || !role || !fullName) {
        return res.status(400).json({
            message: "gmail, password, confirmPassword, and role must be provided",
        });
    }

    // Check if password and confirmPassword match
    if (password !== confirmPassword) {
        return res.status(400).json({
            message: "Passwords do not match",
        });
    }

    // Check if the email is already registered
    const userfound = await User.find({ userGmail: userGmail });
    if (userfound.length > 0) {
        return res.status(400).json({
            message: "This email is already registered, please try again",
        });
    }

    // Create new user
    await User.create({
        userGmail,
        fullName,
        role,
        password: bcrypt.hashSync(password, 10),
        confirmPassword:bcrypt.hashSync(password, 10),
    });

    res.status(201).json({
        message: "User registered successfully",
    });
};

module.exports = userRegister;
