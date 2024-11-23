import { Request, Response } from "express";
import { getAllIssues, getIssueById } from "../services/issuesServices";

export const getIssuesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const issues = await getAllIssues();

    res.status(200).json(issues);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};

export const getIssueByIdController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const issueById = await getIssueById(id);

    res.status(200).json(issueById);
  } catch (error) {
    const err = error as Error;
    res.status(404).json(err.message);
  }
};
