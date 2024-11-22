import issuesRouter from "./routes/issues.routes";
import { Router } from "express";

const router: Router = Router();

router.use("/issues", issuesRouter);

export default router;
