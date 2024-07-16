import User from "../models/user-model.js";
import argon2 from "argon2"

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
    try {
        await User.create({
            name: name,
            email: email,
            password: hashPassword,
            role:role,
        });
        res.status(201).json({msg: "Register succeeded"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

export const updateUser = async (req, res) => {
    const user = await User.updateOne({_id: req.params.id}, {$set: req.body});

    if(!user) return res.status(404).json({msg: "User not found"});
    const {name, email, password, confirmPassword} = req.body;
    let hashPassword;
    if(password === "" || password === null){
        hashPassword = user.password
    }else {
        hashPassword = await argon2.hash(password);
    }
    if(password !== confirmPassword) return res.status(400).json({msg: "Password and Confirm Password are don't match"})
    try {
        await User.updateOne({
            name: name,
            email: email,
            password: hashPassword
        }, {
            where: {
                _id: user.id
            }
        });
    res.status(200).json({msg: "User updated"})
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

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