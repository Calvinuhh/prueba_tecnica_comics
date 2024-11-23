import express from "express";
import morgan from "morgan";
import cors from "cors";
import { json } from "express";
import router from "./router/index";

process.loadEnvFile();
const { FRONTEND_URL } = process.env;

const server = express();

server.use(
  cors({
    origin: FRONTEND_URL,
    methods: "GET",
  })
);
server.use(json());
server.use(morgan("dev"));

server.use(router);

export default server;
