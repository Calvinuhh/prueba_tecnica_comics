import { Router } from "express";
import {
  getIssuesController,
  getIssuesByIdController,
} from "../controllers/IssuesController.js";

const issuesRouter = Router();

issuesRouter.get("/", getIssuesController);
issuesRouter.get("/:issue", getIssuesByIdController);

export default issuesRouter;