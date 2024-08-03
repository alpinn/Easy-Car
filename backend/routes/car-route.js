import express from "express"
import {
    getCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
} from "../controllers/car-controller.js"

const router = express.Router();

router.get('/cars', getCars)
router.get('/cars/:id', getCarById)

router.post('/cars', createCar)

router.patch('/cars/:id', updateCar)

router.delete('/cars/:id', deleteCar)


export default router;