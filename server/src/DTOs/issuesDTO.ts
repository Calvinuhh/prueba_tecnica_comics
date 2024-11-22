import Issue from "../interfaces/issue.interface";

type IssueDTO = Omit<Issue, "_id">;

export default IssueDTO;
