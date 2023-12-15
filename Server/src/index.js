const express = require("express");
const server = express();
const { conn } = require("./DB_connection");
//const characters = require("./utils/data");
const routerIndex = require("./routes");
const PORT = 3001;

//* Sicronizo la intancia de "Sequelize" al servidor
conn.sync({ force: false });
try {
  server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, DELETE"
    );
    next();
  });
  server.use(express.json());
  server.use("/rickandmorty", routerIndex);

  server.listen(PORT, () => {
    console.log("Server raised in part: " + PORT);
  });
} catch (error) {
  return (error) => console.log(error.message);
}
