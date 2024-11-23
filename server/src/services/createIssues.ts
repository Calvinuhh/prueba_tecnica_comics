import { APIResponse } from "../interfaces/issues.interface";
import IssueModel from "../models/Issue";

process.loadEnvFile();
const { API_KEY, MAIN_URL } = process.env;

const createIssuesData = async (): Promise<void> => {
  const petition = await fetch(
    `${MAIN_URL}/issues?api_key=${API_KEY}&format=json&limit=99`
  );

  const { results }: APIResponse = await petition.json();

  const newData = results.map(
    ({ name, cover_date, image, issue_number, volume, api_detail_url }) => {
      return {
        name,
        date: cover_date,
        image: image.original_url,
        issue_number,
        volume: volume.name,
        detail_url: api_detail_url,
      };
    }
  );

  const issues = await IssueModel.find();

  if (issues.length === 0) {
    await IssueModel.create(newData);
  }
};

export default createIssuesData;
