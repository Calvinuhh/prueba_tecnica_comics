import { Router } from "express";
import {
  getIssuesController,
  getIssueByIdController,
} from "../../controllers/IssuesController";

const issuesRouter: Router = Router();

issuesRouter.get("/", getIssuesController);
issuesRouter.get("/:id", getIssueByIdController);

export default issuesRouter;
