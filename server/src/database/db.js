import { Sequelize } from "sequelize";

import IssueModel from "../models/Issue.js";

process.loadEnvFile();
const { DB_USER, DB_PASSWORD, DB_HOST, DATABASE_NAME } = process.env;

const database = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DATABASE_NAME}`,
  { logging: false, timestamps: false }
);

IssueModel(database);

const { Issue } = database.models;

export { Issue };

export default database;
