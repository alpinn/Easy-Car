import express from "express"
import { Login, Me, Logout, forgetPassword, resetPassword } from "../controllers/auth-controller.js"

const router = express.Router();

router.get('/me', Me)

router.post('/login', Login)
router.post("/lupapassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);


router.delete('/logout', Logout)

export default router;