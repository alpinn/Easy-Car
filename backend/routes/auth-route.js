import express from "express"
import { Login, LoginAdmin, Me, AdminMe,  Logout, forgetPassword, resetPassword } from "../controllers/auth-controller.js"

const router = express.Router();

router.get('/me', Me)
router.get('/admin/me', AdminMe)

router.post('/login', Login)
router.post('/admin/login', LoginAdmin)
router.post("/lupapassword", forgetPassword);
router.post("/reset-password/:token", resetPassword);


router.delete('/logout', Logout)

export default router;