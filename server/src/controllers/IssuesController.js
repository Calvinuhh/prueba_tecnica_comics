import { Issue, Detail } from "../database/db.js";

export const getIssuesController = async (req, res) => {
  try {
    const issues = await Issue.findAll();

    res.status(200).json(issues);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getDetailsController = async (req, res) => {
  const { id } = req.query;
  try {
    const details = await Detail.findAll();

    res.status(200).json(details);
  } catch (error) {
    res.status(400).json(error.message);
  }
};
