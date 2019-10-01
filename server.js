require("dotenv").config();
const express = require("express");
const logger = require("./utils/logger");

require("express-async-errors");

const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

require("./config/mongoose");
require("./app")(app);

app.use((req, res) => {
  return res.status(404).send("Resource not found");
});

// Catch all for non-async errors
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  logger.error(err.stack);
  return res.status(500).send("Server error");
});

const port = process.env.PORT || 7000;

app.listen(port, () => {
  logger.info(`Server is listening at port ${port}`);
});
