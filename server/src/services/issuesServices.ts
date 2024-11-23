import Issue, { IssueById, MapData } from "../interfaces/issues.interface";
import IssueModel from "../models/Issue";

process.loadEnvFile();
const { MAIN_URL, API_KEY } = process.env;

export const getAllIssues = async (): Promise<Issue[]> => {
  const issues = await IssueModel.find();

  if (issues.length === 0) throw Error("No issues found");

  return issues;
};

export const getIssueById = async (id: string): Promise<IssueById> => {
  const petition = await fetch(
    `${MAIN_URL}/issue/4000-${id}?api_key=${API_KEY}&format=json`
  );

  const { results } = await petition.json();

  if (results.length === 0) {
    throw Error(`Issue not Found`);
  } else {
    const issueById: IssueById = {
      volume: results.volume.name,
      name: results.name,
      image: results.image && results.image.original_url,
      date: results.cover_date,
      issue_number: results.issue_number,
      characters: results.character_credits.map((elem: MapData) => elem.name),
      authors: results.person_credits.map((elem: MapData) => elem.name),
      locations: results.location_credits.map((elem: MapData) => elem.name),
    };

    return issueById;
  }
};
