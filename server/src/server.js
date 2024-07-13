import express from "express";
import issuesRouter from "./routes/getIssues.routes.js";

import { json } from "express";

const server = express();

server.use(json());

server.use("/issues", issuesRouter);

export default server;
