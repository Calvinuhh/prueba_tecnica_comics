import { Router } from "express";

const testRouter = Router();

testRouter.get("/", (req, res) => {
  res.json("Hola mundo!");
});

export default testRouter;