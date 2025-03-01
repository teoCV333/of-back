import express from "express";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import paymentRouter from "./paymentRoutes.js";
import { limiter } from '../middlewares/rateLimitMiddleware.js';

const router = express.Router();

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/paymethod", paymentRouter);

export default router;