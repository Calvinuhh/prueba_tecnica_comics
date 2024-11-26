import issuesRouter from "./routes/issues.routes";
import welcomeRouter from "./routes/welcome.routes";
import { Router } from "express";

const router: Router = Router();

router.use("/", welcomeRouter);
router.use("/issues", issuesRouter);

export default router;
