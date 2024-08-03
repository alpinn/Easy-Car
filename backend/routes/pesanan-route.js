import express from "express"
import { getAllPesanan, getUserPesanan, createPesanan, getPesananById, updatePesanan, deletePesanan} from "../controllers/pesanan-controller.js"
import { verifyUser } from "../middlewares/middleware.js";

const router = express.Router();

router.get('/admin/pesanan', verifyUser, getAllPesanan)
router.get('/user/pesanan', verifyUser, getUserPesanan)
router.get('/pesanan/:id', verifyUser, getPesananById)

router.post('/pesanan', verifyUser, createPesanan)

router.put('/pesanan/:id', verifyUser, updatePesanan)

router.delete('/admin/pesanan/:id', verifyUser, deletePesanan)

export default router;