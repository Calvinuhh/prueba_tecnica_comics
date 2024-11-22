import { Schema, model } from "mongoose";
import Issue from "../interfaces/issue.interface";

const issueSchema = new Schema<Issue>(
  {
    name: {
      type: String,
      unique: true,
    },
    date: String,
    image: String,
    issue_number: Number,
    volume: String,
    detail_url: String,
  },
  {
    versionKey: false,
  }
);

const IssueModel = model<Issue>("issue", issueSchema);

export default IssueModel;
