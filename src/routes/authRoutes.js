import express from "express";
import { register, login, refreshToken } from "../controllers/authController.js";
import { validateLogin, validateRegister } from "../middlewares/validateMiddleware.js";

const router = express.Router();

router.post("/register",validateRegister, register);
router.post("/login", validateLogin, login);
router.post('/api/user/refresh', refreshToken )
//router.get("/profile", authenticate, getProfile);

export default router;