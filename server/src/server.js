import express from "express";
import testRouter from "./routes/test.routes.js";

const app = express();

app.use(testRouter);

export default app;
