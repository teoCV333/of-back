import prisma from "../config/db.js";
import { activateSubService, cancelSubService, getProfileService, validateSubService } from "../services/userService.js";

export const getProfile = async (req, res) => {
    try {
      const response = await getProfileService(req.user);
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  export const validateSub = async (req, res) => {
    try {
      const response = await validateSubService(req.user);
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  export const activateSub = async (req, res) => {
    try {
      const response = await activateSubService(req.user);
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };

  export const cancelSub = async (req, res) => {
    try {
      const response = await cancelSubService(req.user);
      res.json(response);
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  };


