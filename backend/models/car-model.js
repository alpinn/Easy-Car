import mongoose from "mongoose";

const carSchema = mongoose.Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    seat: {
        type: Number,
        required: true,
    },
    transmision: {
        type: String,
        required: true,
    },
    door: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true, 
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Users"
    }
})

export default mongoose.model('Cars', carSchema);