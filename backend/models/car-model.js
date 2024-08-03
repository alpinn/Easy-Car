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
    fuel: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true, 
    },
})

export default mongoose.model('Cars', carSchema);