import { Request, Response } from "express";
import IssueModel from "../models/Issue";

process.loadEnvFile();
const { API_KEY, MAIN_URL } = process.env;

export const getIssuesController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const issues = await IssueModel.find();

    res.status(200).json(issues);
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};

export const getDetailsController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const petition = await fetch(
      `${MAIN_URL}/issue/4000-${id}?api_key=${API_KEY}&format=json`
    );

    const { results } = await petition.json();

    // res.status(200).json({
    //   volume: results.volume.name,
    //   name: results.name,
    //   image: results.image && results.image.original_url,
    //   date: results.cover_date,
    //   issue_number: results.issue_number,
    //   characters: results.character_credits.map((elem) => elem.name),
    //   authors: results.person_credits.map((elem) => elem.name),
    //   locations: results.location_credits.map((elem) => elem.name),
    // });
  } catch (error) {
    const err = error as Error;
    res.status(400).json(err.message);
  }
};
