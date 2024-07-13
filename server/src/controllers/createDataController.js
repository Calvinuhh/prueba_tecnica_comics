import { Issue } from "../database/db.js";

const { API_KEY, MAIN_URL } = process.env;

export async function createIssuesData() {
  const petition = await fetch(
    `${MAIN_URL}/issues?api_key=${API_KEY}&format=json&limit=30`
  );

  const { results } = await petition.json();

  const data = results.map((elem) => {
    return {
      name: elem.name,
      date: elem.cover_date,
      image: elem.image.original_url,
      issue_number: elem.issue_number,
      volume: elem.volume.name,
    };
  });

  const issues = await Issue.findAll();

  if (issues.length === 0) {
    await Issue.bulkCreate(data);
  }
}
