import mongoose from "mongoose";

const contactUsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    pesan: {
        type: String,
        required: true,
    },
})

export default mongoose.model('Contacts', contactUsSchema);