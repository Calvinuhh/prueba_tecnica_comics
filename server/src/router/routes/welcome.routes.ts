import { Router } from "express";
import welcomeController from "../../controllers/welcomeController";

const welcomeRouter: Router = Router();

welcomeRouter.get("/", welcomeController);

export default welcomeRouter;
