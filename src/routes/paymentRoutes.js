import express from "express";
import authenticate from "../middlewares/authMiddleware.js";
import { validateAddCard } from "../middlewares/validateMiddleware.js";
import { addPaymentMethod, getPaymentsMethodByUser, removePaymentMethod } from "../controllers/paymentController.js";

const router = express.Router();

router.get("/getpm", authenticate, getPaymentsMethodByUser);
router.post("/addpm", authenticate, validateAddCard, addPaymentMethod);
router.delete("/rmpm/:id", authenticate, removePaymentMethod);
//router.get("/profile", authenticate, getProfile);

export default router;