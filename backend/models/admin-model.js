import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: 'Admin',
    },
    type: {
        type: String,
        required: true,
    }
})

export default mongoose.model('Admins', adminSchema);

// const User = mongoose.model('User', userSchema)
// module.exports = User;