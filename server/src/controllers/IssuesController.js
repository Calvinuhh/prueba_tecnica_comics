import { Issue } from "../database/db.js";

process.loadEnvFile();

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

  try {
    const petition = await fetch(
      `${MAIN_URL}/issue/4000-${id}?api_key=${API_KEY}&format=json`
    );

    const { results } = await petition.json();

    res.status(200).json({
      volume: results.volume.name,
      name: results.name,
      image: results.image && results.image.original_url,
      date: results.cover_date,
      issue_number: results.issue_number,
      characters: results.character_credits.map((elem) => elem.name),
      authors: results.person_credits.map((elem) => elem.name),
      locations: results.location_credits.map((elem) => elem.name),
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};
