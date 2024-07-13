import { Router } from "express";
import {
  getIssuesController,
  getDetailsController,
} from "../controllers/IssuesController.js";

const issuesRouter = Router();

issuesRouter.get("/", getIssuesController);
issuesRouter.get("/details", getDetailsController);

export default issuesRouter;
