import { json } from "express";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
const allowedOrigins = ['https://www.onlyfansgold.com', 'https://ufapi.store', 'https://www.ufapi.store', 'http://localhost:4200'];

app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(cors({origin: allowedOrigins}));

// Routes
app.use("/api", routes);

export default app;