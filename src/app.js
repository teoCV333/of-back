import { json } from "express";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(cors([{ origin: "http://localhost:4200", credentials: true }, {origin: "https://www.onlyfansgold.com", credentials: true}]));


// Routes
app.use("/api", routes);

export default app;