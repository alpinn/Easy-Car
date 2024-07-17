import User from "../models/user-model.js";
import argon2  from "argon2";

export const Login = async (req, res) => {
    if (req.session.userId) {
        return res.status(400).json({ msg: "You are already logged in" });
    }
    try {
      const user = await User.findOne({ email: req.body.email });
  
      if (!user) return res.status(404).json({ msg: "User not found" });
  
      const isValid = await argon2.verify(user.password, req.body.password);
      if (!isValid) return res.status(400).json({ msg: "Email or password is incorrect" });
  
      req.session.userId = user._id;
  
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
    if (!req.session.userId) {
        return res.status(200).json({ msg: "Already logged out" });
    }
    req.session.destroy((err) => {
        if (err) {
            console.error(err);
            res.status(400).json({ msg: "Logout failed" });
        } else {
            res.status(200).json({ msg: "Logout succeeded" });
        }
    });
};
