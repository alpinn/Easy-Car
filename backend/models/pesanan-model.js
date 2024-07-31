import mongoose from "mongoose";

const pesananSchema = mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
    },
    pickUpDate: {
        type: String,
        required: true,
    },
    pickUpTime: {
        type: String,
        required: true,
    },
    dropOffDate: {
        type: String,
        required: true,
    },
    dropOffTime: {
        type: String,
        required: true,
    },
    order: {
        type: String,
        required: true,
        default:'Pending'
    },
    bookingDate: {
        type: String,
        required: true, 
        default: () => {
            const date = new Date();
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            const hours = String(date.getHours()).padStart(2, "0");
            const minutes = String(date.getMinutes()).padStart(2, "0");
            const seconds = String(date.getSeconds()).padStart(2, "0");
            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        },
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Users"
    },
    car_id: {
        type: mongoose.Schema.Types.ObjectId, ref: "Cars"
    }
})

export default mongoose.model('Pesanans', pesananSchema);