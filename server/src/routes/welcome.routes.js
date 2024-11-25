import { Router } from "express";
import welcomeController from "../controllers/welcomeController.js";

const welcomeRouter = Router();

welcomeRouter.get("/", welcomeController);

export default welcomeRouter;
