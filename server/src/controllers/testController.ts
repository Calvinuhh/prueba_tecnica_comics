import { Request, Response } from "express";
import createIssuesData from "../services/createIssues";

process.loadEnvFile();
const { API_KEY, MAIN_URL } = process.env;

export const testController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    console.log(API_KEY, MAIN_URL);

    const data = await createIssuesData();

    res.status(200).json(data);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
