import pkg from '@prisma/client';
import app from "./app.js";
import {env} from "./config/env.js";

const { PrismaClient } = pkg;

app.listen(env.port, () => {
  console.log(`the server is running on port: ${env.port}`);
});