import express from "express";
import authenticate from "../middlewares/authMiddleware.js";
import { activateSub, getProfile, validateSub, cancelSub } from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", authenticate, getProfile);
router.get("/validatesub", authenticate, validateSub);
router.get("/activatesub", authenticate, activateSub);
router.get("/cancelsub", authenticate, cancelSub);

export default router;