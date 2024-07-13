import server from "./src/server.js";

const { PORT } = process.env;

server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto: http://localhost:${PORT}`);
});