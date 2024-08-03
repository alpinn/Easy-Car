import Admin from "../models/admin-model.js";
import argon2 from "argon2"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const getAdmins = async (req, res) => {
    try {
        const response = await Admin.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getAdminsById = async (req, res) => {
    try {
        const response = await Admin.findById(req.params.id);
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }

}

export const createAdmin = async (req, res) => {
    const {name, email, password, confirmPassword, role, type} = req.body;
    if(password !== confirmPassword) return res.status(400).json({msg: "Password and Confirm Password are don't match"})

    const existingUser = await Admin.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "Email already exists" });

    const hashPassword = await argon2.hash(password);
    const adminRole = role ? role : 'Admin';
    const token = jwt.sign({_id: Admin._id}, process.env.JWT_KEY, {
        expiresIn: '3m',
    })
    
    try {
        await Admin.create({
            name: name,
            email: email,
            password: hashPassword,
            role: adminRole,
            type: type
        });
        res.status(201).json({msg: "Admin created", token})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const deleteAdmin = async (req, res) => {
    const admin = await Admin.deleteOne({_id: req.params.id})
    if(!admin) return res.status(404).json({msg: "Admin not found"});
    try{
        await Admin.deleteOne({
            where: {
                _id: admin.id
            }
        })
    res.status(200).json({msg: "Admin deleted"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}