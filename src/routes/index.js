import express from "express";
import authRouter from "./authRoutes.js";
import userRouter from "./userRoutes.js";
import paymentRouter from "./paymentRoutes.js";
import { limiter } from '../middlewares/rateLimitMiddleware.js';

const router = express.Router();

router.use("/auth", limiter, authRouter);
router.use("/user", limiter, userRouter);
router.use("/paymethod", limiter, paymentRouter);

export default router;