import { Request, Response } from "express";
import welcome from "../services/welcomeServer";

const welcomeController = (req: Request, res: Response) => {
  try {
    const message = welcome();

    res.status(200).json(message);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export default welcomeController;
