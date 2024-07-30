import Car from "../models/car-model.js";

export const getCars = async(req, res) => {
    try {
        const response = await Car.find({}).populate('user_id', ['name', 'email']).select(['image', 'name', 'seat', 'transmision', 'door', 'price']);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getCarById = async(req, res) => {
    try {
        const car = await Car.findOne({ _id: req.params.id });
        if(!car) return res.status(404).json({msg: "Car not found"})
        const response = await Car.findOne({ _id: car._id, user_id: req.userId }).populate('user_id', ['name', 'email']).select(['image', 'name', 'seat', 'transmision', 'door', 'price']);
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const createCar = async(req, res) => {
    const {image, name, seat, transmision, door, price} = req.body;
    try {
        const newCar = new Car({
            image: image,
            name: name,
            seat: seat,
            transmision: transmision,
            door: door,
            price: price,
            user_id: req.userId
        });
        await newCar.save();
        res.status(201).json({msg: "Car Created Successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const updateCar = async(req, res) => {
    try {
        const car = await Car.findOne({ _id: req.params.id });
        if(!car) return res.status(404).json({msg: "Car not found"})
        const {image, name, seat, transmision, door, price} = req.body;
        await Car.findByIdAndUpdate(car._id, {image, name, seat, transmision, door, price});
        res.status(200).json({msg: "Car updated successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const deleteCar = async(req, res) => {
    try {
        const car = await Car.findOne({ _id: req.params.id });
        if(!car) return res.status(404).json({msg: "Car not found"})
        await Car.findByIdAndDelete(car._id);
        res.status(200).json({msg: "Car deleted successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}