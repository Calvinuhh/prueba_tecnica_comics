import server from "./src/server.js";
import database from "./src/database/db.js";
import { createIssuesData } from "./src/controllers/createDataController.js";

const { PORT } = process.env;

database
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log("Conexion con la base de datos exitosa");
      console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`);
      createIssuesData();
    });
  })
  .catch((error) => {
    console.error("error:", error);
  });
