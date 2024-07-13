import { Sequelize } from "sequelize";

import IssueModel from "../models/Issue.js";
import DetailModel from "../models/Detail.js";

const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_NAME } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE_NAME}`,
  { logging: false, timestamps: false }
);

IssueModel(database);
DetailModel(database);

const { Issue, Detail } = database.models;

export { Issue, Detail };

export default database;
