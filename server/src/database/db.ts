import { connect } from "mongoose";
import server from "../server";
import createIssuesData from "../services/createIssues";

process.loadEnvFile();
const { PORT } = process.env;
const { DB_URI } = process.env as { DB_URI: string };

const dbConnect = async (): Promise<void> => {
  try {
    await connect(DB_URI);
    console.log("Database conection succesful");
    await server.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}`);
    });
    await createIssuesData();
  } catch (error) {
    const err = error as Error;
    console.log(err.message);
    throw Error("It was unable to connect to the database");
  }
};

export default dbConnect;
