import IssueDTO from "../DTOs/issuesDTO";

export default interface Issue {
  _id: string;
  name: string;
  date: string;
  image: string;
  issue_number: number;
  volume: string;
  detail_url: string;
}

export interface FetchResponse {
  results: IssueDTO[];
}
