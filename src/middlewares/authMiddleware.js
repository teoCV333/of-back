import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || "supersecret";

const authenticate = (req, res, next) => {
  const token = req.header("Authorization");

  // Check if the token exists and is in the correct format
  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).json({ message: "Access denied. Token is missing or malformed" });
  }

  try {
    // Extract the token from the "Bearer <token>" format
    const decoded = jwt.verify(token.split(" ")[1], JWT_SECRET);
    req.user = decoded;
    next();  // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });  // Return after response
  }
};

export default authenticate;
