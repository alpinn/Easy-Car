import mongoose from "mongoose";

const testimonialSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    opinion: {
        type: String,
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Users"
    }
})

export default mongoose.model('Testimonials', testimonialSchema);