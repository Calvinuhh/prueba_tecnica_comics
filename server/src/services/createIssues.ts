import IssueDTO from "../DTOs/issuesDTO";
import { FetchResponse } from "../interfaces/issue.interface";

process.loadEnvFile();
const { API_KEY, MAIN_URL } = process.env;

const createIssuesData = async (): Promise<IssueDTO[] | undefined> => {
  console.log(API_KEY, MAIN_URL);

  const petition = await fetch(
    `${MAIN_URL}/issues?api_key=${API_KEY}&format=json&limit=5`
  );

  const { results }: FetchResponse = await petition.json();

  const data = results.map(
    ({ name, date, detail_url, image, issue_number, volume }) => {
      return {
        name,
        date,
        detail_url,
        image,
        issue_number,
        volume,
      };
    }
  );

  console.log(data);

  return data;
};

export default createIssuesData;
