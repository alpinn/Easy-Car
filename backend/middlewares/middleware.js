import User from "../models/user-model.js";

export const verifyUser = async (req, res, next) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Try to login" });
    }
    const user = await User.findById(req.session.userId);

    if (!user) return res.status(404).json({ msg: "User not found" });
    req.userId = user._id;
    req.role = user.role;
    next();
}