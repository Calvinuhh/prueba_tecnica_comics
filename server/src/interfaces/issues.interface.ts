export default interface Issue {
  _id: string;
  name: string | null;
  date: string;
  image: string;
  issue_number: string;
  volume: string;
  detail_url: string;
}

export interface APIResponse {
  results: Array<{
    name?: string;
    cover_date: string;
    image: { original_url: string };
    issue_number: string;
    volume: { name: string };
    api_detail_url: string;
  }>;
}

export interface IssueById {
  volume: string;
  name?: string;
  image: string;
  date: string;
  issue_number: string;
  characters: Array<{ name: string }>;
  authors: Array<{ name: string }>;
  locations: Array<{ name: string }>;
}

export type MapData = { name: string };
