import User from "../models/user-model.js";
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const getUsers = async (req, res) => {
    try {
        const response = await User.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getUsersById = async (req, res) => {
    try {
        const response = await User.findById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }

}

export const createUser = async (req, res) => {
    const {name, email, password, confirmPassword, role} = req.body;
    if(password !== confirmPassword) return res.status(400).json({msg: "Password and Confirm Password are don't match"})

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "Email already exists" });

    const hashPassword = await argon2.hash(password);
    const userRole = role ? role : 'User';
    const token = jwt.sign({_id: User._id}, process.env.JWT_KEY, {
        expiresIn: '3m',
    })
    
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role:userRole,
        });
        res.status(201).json({msg: "Register succeeded", token})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ msg: "User not found" });
  
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) return res.status(400).json({ msg: "Password and Confirm Password are don't match" });
  
    const hashPassword = await argon2.hash(password);
  
    try {
      await User.updateOne({ _id: req.params.id }, {
        $set: {
          password: hashPassword,
        },
      });
      res.status(200).json({ msg: "Password updated" });
    } catch (error) {
      res.status(400).json({ msg: error.message });
    }
};

export const updateStatusUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
  
        if (!user) return res.status(404).json({ msg: "User not found" });
  
      // Update pesanan
      const { status } = req.body;
      user.status = status;
  
      await user.save();
      res.status(200).json({ msg: "User status updated successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const user = await User.deleteOne({_id: req.params.id})
    if(!user) return res.status(404).json({msg: "User not found"});
    try{
        await User.deleteOne({
            where: {
                _id: user.id
            }
        })
    res.status(200).json({msg: "User deleted"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}