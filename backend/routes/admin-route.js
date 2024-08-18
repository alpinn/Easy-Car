import express from "express"
import { getAdmins, getAdminsById, createAdmin, updateAdmin, deleteAdmin } from "../controllers/admin-controller.js"

const router = express.Router();

router.get('/admins', getAdmins)
router.get('/admins/:id', getAdminsById)

router.patch('/admins/:id', updateAdmin)

router.post('/admins/register', createAdmin)

router.delete('/admins/:id', deleteAdmin)

export default router;