import User from "../models/user-model.js";
import Admin from "../models/admin-model.js";
import argon2  from "argon2";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import nodemailer from "nodemailer"

dotenv.config()

export const Login = async (req, res) => {
    if (req.session.userId) {
        return res.status(400).json({ msg: "You are already logged in" });
    }
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Email and password are required" });
        }
        const user = await User.findOne({ email });
    
        if (!user) return res.status(404).json({ msg: "User not found" });
    
        const isValid = await argon2.verify(user.password, password);
        if (!isValid) return res.status(400).json({ msg: "Email or password is incorrect" });
    
        req.session.userId = user._id;
        req.session.role = user.role;
    
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Internal Server Error" });
        }
};

export const LoginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ msg: "Email and password are required" });
        }
        const admin = await Admin.findOne({ email });
    
        if (!admin) return res.status(404).json({ msg: "Admin not found" });
    
        const isValid = await argon2.verify(admin.password, password);
        if (!isValid) return res.status(400).json({ msg: "Email or password is incorrect" });
    
        req.session.adminId = admin._id;
    
        res.status(200).json({
            _id: admin._id,
            name: admin.name,
            email: admin.email,
            role: admin.role,
            type: admin.type
        });
        } catch (error) {
            console.error(error);
            res.status(500).json({ msg: "Internal Server Error" });
        }
};

export const Me = async (req, res) => {
    try {
        if (!req.session.userId) {
            return res.status(401).json({ msg: "Try to login" });
        }
        const user = await User.findById(req.session.userId);

        if (!user) return res.status(404).json({ msg: "User not found" });
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

export const Logout = (req, res) => {
    if (!req.session.userId && !req.session.adminId) {
        return res.status(200).json({ msg: "Already logged out" });
    }
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(400).json({ msg: "Logout failed" });
        } else {
            res.status(200).json({ msg: "Logout succeeded" });
        }
    })
};

export const forgetPassword = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ msg: "Email is required" });
        }
        const user = await User.findOne({ email });

        // If user not found, send error message
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        // Generate a unique JWT token for the user that contains the user's id
        const token = jwt.sign({_id: user._id}, process.env.JWT_KEY, {
            expiresIn: '3m',
        })
        // Send the token to the user's email
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD_APP_EMAIL,
            },
            debug:true,
        });

        // Email configuration
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "Reset Password",
            html: `<h1>Reset Your Password</h1>
            <p>Click on the following link to reset your password:</p>
            <a href="http://localhost:5173/reset-password/${token}">http://localhost:5173/reset-password/${token}</a>
            <p>The link will expire in 3 minutes.</p>
            <p>If you didn't request a password reset, please ignore this email.</p>`,
        };

        // Send the email
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.status(500).json({ msg: err.message });
            } else {
                return res.json({ msg: "Email sent successfully", token: token});
            }
        });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

export const resetPassword = async (req, res) => {
    try {
        console.log('req.params:', req.params);
        console.log('req.body:', req.body);
        const token = req.params.token;
        const newPassword = req.body.password;
        if (!token || !newPassword) {
            return res.status(400).json({ msg: "Token and new password are required" });
        }
      // Verify the token sent by the user
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
  
      // If the token is invalid, return an error
        if (!decodedToken) {
        return res.status(401).json({ msg: "Invalid token" });
        }
  
      // find the user with the id from the token
      const user = await User.findOne({ _id: decodedToken._id });
      if (!user) {
        return res.status(401).json({ msg: "User Not Found" });
      }
      
      // Hash the new password
      const hashedPassword = await argon2.hash(newPassword);
  
      // Update user's password, clear reset token and expiration time
      user.password = hashedPassword;
      await user.save();
  
      // Send success response
      res.status(200).json({ message: "Password updated" });
    } catch (err) {
      // Send error response if any error occurs
      res.status(500).json({ message: err.message });
    }
};
