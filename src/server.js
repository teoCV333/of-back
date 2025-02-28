import { PrismaClient } from "@prisma/client";
import app from "./app.js";
import {env} from "./config/env.js";

const prisma = new PrismaClient();

app.listen(env.port, () => {
  console.log(`the server is running on port: ${env.port}`);
});