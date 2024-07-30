import express from "express"
import {
    getContactUs,
    createContactUs,
} from "../controllers/contactUs-controller.js"

const router = express.Router();

router.get('/contact-us', getContactUs)

router.post('/contact-us', createContactUs)


export default router;