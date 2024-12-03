import express from "express";
import issuesRouter from "./routes/getIssues.routes.js";
import welcomeRouter from "./routes/welcome.routes.js";
import morgan from "morgan";
import cors from "cors";
import { json } from "express";

const { FRONTEND_URL } = process.env;

const server = express();

server.use(
  cors({
    origin: FRONTEND_URL,
    methods: "GET",
  })
);
server.use(morgan("dev"));
server.use(json());

server.use("/", welcomeRouter);
server.use("/issues", issuesRouter);

export default server;
