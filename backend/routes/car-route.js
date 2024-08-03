import express from "express"
import {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
} from "../controllers/car-controller.js"

import { verifyUser } from "../middlewares/middleware.js";

const router = express.Router();

router.get('/cars', getCars)
router.get('/cars/:id',verifyUser, getCarById)

router.post('/cars',verifyUser, createCar)

router.patch('/cars/:id',verifyUser, updateCar)

router.delete('/cars/:id',verifyUser, deleteCar)


export default router;