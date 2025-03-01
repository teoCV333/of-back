import { json } from "express";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

const corsOptions = {
    origin: 'https://www.onlyfansgold.com', // Match the Nginx configuration
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Allow cookies if needed
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(json());


// Routes
app.use("/api", routes);

export default app;