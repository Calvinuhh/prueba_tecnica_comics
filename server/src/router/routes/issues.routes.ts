import { Router } from "express";
import {
  getIssuesController,
  // getDetailsController,
} from "../../controllers/IssuesController";

const issuesRouter = Router();

issuesRouter.get("/", getIssuesController);
// issuesRouter.get("/:id", getDetailsController);

export default issuesRouter;
