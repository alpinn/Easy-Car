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
        default: 'user',
    },
    type: {
        type: String,
    }
})

export default mongoose.model('Users', userSchema);

// const User = mongoose.model('User', userSchema)
// module.exports = User;