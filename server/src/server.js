import express from "express";
import issuesRouter from "./routes/getIssues.routes.js";
import morgan from "morgan";
import cors from "cors";

import { json } from "express";

const server = express();

server.use(cors());
server.use(morgan("dev"));
server.use(json());

server.use("/issues", issuesRouter);

export default server;
