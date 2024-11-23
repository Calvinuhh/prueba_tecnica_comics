export default interface Issue {
  _id: string;
  name: string | null;
  date: string;
  image: string;
  issue_number: string;
  volume: string;
  detail_url: string;
}

export interface APIInterface {
  results: Array<{
    name: string;
    cover_date: string;
    image: { original_url: string };
    issue_number: string;
    volume: { name: string };
    api_detail_url: string;
  }>;
}

// export type IssueDTO = Omit<Issue, "_id">;
