import { APIInterface } from "../interfaces/issues.interface";
import IssueModel from "../models/Issue";

process.loadEnvFile();
const { API_KEY, MAIN_URL } = process.env;

const createIssuesData = async (): Promise<void> => {
  const petition = await fetch(
    `${MAIN_URL}/issues?api_key=${API_KEY}&format=json&limit=50`
  );

  const { results }: APIInterface = await petition.json();

  const newData = results.map((elem) => {
    return {
      name: elem.name,
      date: elem.cover_date,
      image: elem.image.original_url,
      issue_number: elem.issue_number,
      volume: elem.volume.name,
      detail_url: elem.api_detail_url,
    };
  });

  const issues = await IssueModel.find();

  if (issues.length === 0) {
    await IssueModel.create(newData);
  }
};

export default createIssuesData;
