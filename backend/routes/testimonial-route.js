import express from "express"
import {
    getTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
} from "../controllers/testimonial-controller.js"

import { verifyUser } from "../middlewares/middleware.js";

const router = express.Router();

router.get('/testimonial', getTestimonials)

router.post('/testimonial', verifyUser, createTestimonial)

router.patch('/testimonial/:id', verifyUser, updateTestimonial)

router.delete('/testimonial/:id', verifyUser, deleteTestimonial)


export default router;