import { Router } from "express";
import {
  getIssuesController,
  getDetailsController,
} from "../../controllers/IssuesController";

import { testController } from "../../controllers/testController";

const issuesRouter = Router();

issuesRouter.get("/", getIssuesController);
issuesRouter.get("/:id", getDetailsController);
issuesRouter.get("/test", testController);

export default issuesRouter;
