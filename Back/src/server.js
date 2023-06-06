const express = require("express");
require("dotenv").config();
const routes = require("./routes/index");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();

server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", routes);

server.listen(PORT, () => {
  console.log(`Wake up, Neo...`);
});
