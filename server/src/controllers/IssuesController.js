import { Issue } from "../database/db.js";

const { API_KEY, MAIN_URL } = process.env;

export const getIssuesController = async (req, res) => {
  try {
    const issues = await Issue.findAll();

    res.status(200).json(issues);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

export const getDetailsController = async (req, res) => {
  const { id } = req.params;

  const petition = await fetch(
    `${MAIN_URL}/issue/4000-${id}?api_key=${API_KEY}&format=json`
  );

  const { results } = await petition.json();

  res.status(200).json(results);
  try {
  } catch (error) {
    res.status(400).json(error.message);
  }
};
