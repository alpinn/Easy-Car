import Car from "../models/car-model.js";
import multerConfig, { deleteImage } from "../config/multer-config.js"

const upload = multerConfig.single('image');

export const getCars = async(req, res) => {
    try {
        const response = await Car.find();
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getCarById = async(req, res) => {
    try {
        const car = await Car.findOne({ _id: req.params.id });
        if(!car) return res.status(404).json({msg: "Car not found"})
        const response = await Car.findOne({ _id: car._id, user_id: req.userId }).populate('user_id', ['name', 'email']).select(['image', 'name', 'seat', 'transmision', 'door', 'fuel', 'price']);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createCar = async(req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            res.status(500).json({ msg: err.message });
        } else {
            const { name, seat, transmision, door, price, fuel } = req.body;
            try {
                const newCar = new Car({
                    image: req.file.filename,
                    name: name,
                    seat: seat,
                    transmision: transmision,
                    door: door,
                    fuel: fuel,
                    price: price
                });
                await newCar.save();
                res.status(201).json({ msg: "Car Created Successfuly" })
            } catch (error) {
                res.status(500).json({ msg: error.message })
            }
        }
    });
}

export const updateCar = async(req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            res.status(500).json({ msg: err.message });
        } else {
            try {
                const car = await Car.findOne({ _id: req.params.id });
                if (!car) return res.status(404).json({ msg: "Car not found" })
                const { name, seat, transmision, door, fuel, price } = req.body;
                if (req.file) {
                    car.image = req.file.filename;
                }
                await Car.findByIdAndUpdate(car._id, { name, seat, transmision, door, fuel, price, image: car.image });
                res.status(200).json({ msg: "Car updated successfuly" })
            } catch (error) {
                res.status(500).json({ msg: error.message })
            }
        }
    });
}

export const deleteCar = async(req, res) => {
    try {
        const car = await Car.findOne({ _id: req.params.id });
        if(!car) return res.status(404).json({msg: "Car not found"})
        await Car.findByIdAndDelete(car._id);
        deleteImage(car.image);
        res.status(200).json({msg: "Car deleted successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}