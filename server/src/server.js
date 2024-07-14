import express from "express";
import issuesRouter from "./routes/getIssues.routes.js";
import morgan from "morgan";
import cors from "cors";

import { json } from "express";

const server = express();

server.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET",
  })
);
server.use(morgan("dev"));
server.use(json());

server.use("/issues", issuesRouter);

export default server;
