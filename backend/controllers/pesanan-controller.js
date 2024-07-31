import Pesanan from '../models/pesanan-model.js';
import User from '../models/user-model.js';
import Car from '../models/car-model.js';

// Get all pesanan for admin
export const getAllPesanan = async (req, res) => {
    if (req.session.role !== 'admin') {
        return res.status(403).json({ msg: "Forbidden: Only admins can access all pesanan" });
    }
    try {
        const response = await Pesanan.find().populate('user_id').populate('car_id');
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

// Get pesanan for user
export const getUserPesanan = async (req, res) => {
    if (!req.session.userId) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    try {
        const userId = req.session.userId;
        const response = await Pesanan.find({ user_id: userId }).populate('car_id');
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
};

export const getPesananById = async(req, res) => {
    try {
        const pesananId = req.params.id;
        const pesanan = await Pesanan.findById(pesananId).populate('user_id', ['name', 'email']).populate('car_id');
    
        if (!pesanan) {
          return res.status(404).json({ msg: "Pesanan not found" });
        }
    
        res.status(200).json(pesanan);
    } catch (error) {
    res.status(500).json({ msg: error.message });
    }
}

export const createPesanan = async (req, res) => {
    try {
      const userId = req.session.userId;
      const { phoneNumber, pickUpDate, pickUpTime, dropOffDate, dropOffTime, order, car_id } = req.body;
  
      // Check if user_id exists
      const user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Check if car_id exists
      const car = await Car.findById(car_id);
      if (!car) {
        return res.status(404).json({ message: 'Car not found' });
      }
  
      const pesanan = new Pesanan({
        phoneNumber,
        pickUpDate,
        pickUpTime,
        dropOffDate,
        dropOffTime,
        order,
        user_id: userId,
        car_id,
      });
      await pesanan.save();
      res.status(201).json({msg: "Pesanan Created Successfuly"})
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
};

export const updatePesanan = async (req, res) => {
    try {
      const pesananId = req.params.id;
      const pesanan = await Pesanan.findById(pesananId);
  
      if (!pesanan) {
        return res.status(404).json({ msg: "Pesanan not found" });
      }
  
      // Check if user is admin
      if (req.session.role !== 'admin') {
        return res.status(403).json({ msg: "Forbidden: Only admins can update pesanan" });
      }
  
      // Update pesanan
      const { order } = req.body;
      pesanan.order = order;
  
      await pesanan.save();
      res.status(200).json({ msg: "Pesanan updated successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
};