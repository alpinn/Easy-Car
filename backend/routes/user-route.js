import express from "express"
import { getUsers, getUsersById, createUser, updateUser, updateStatusUser, deleteUser } from "../controllers/user-controller.js"

const router = express.Router();

router.get('/users', getUsers)
router.get('/users/:id', getUsersById)

router.post('/register', createUser)

router.put('/users/change-password/:id', updateUser)

router.put('/admin/users/change-status/:id', updateStatusUser)

router.delete('/users/:id', deleteUser)

export default router;