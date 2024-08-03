import express from "express"
import { getAllPesanan, getUserPesanan, createPesanan, getPesananById, updatePesanan, deletePesanan} from "../controllers/pesanan-controller.js"

const router = express.Router();

router.get('/admin/pesanan', getAllPesanan)
router.get('/user/pesanan', getUserPesanan)
router.get('/pesanan/:id', getPesananById)

router.post('/pesan_mobil', createPesanan)

router.put('/admin/pesanan/:id', updatePesanan)

router.delete('/admin/pesanan/:id', deletePesanan)

export default router;