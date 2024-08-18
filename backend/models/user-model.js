import mongoose from "mongoose";

const userSchema = mongoose.Schema({
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
        default: 'User',
    },
    status: {
        type: String,
        default: 'Pending',
    }
})

export default mongoose.model('Users', userSchema);

// const User = mongoose.model('User', userSchema)
// module.exports = User;