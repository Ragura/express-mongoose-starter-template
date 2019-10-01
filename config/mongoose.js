const mongoose = require("mongoose");
const logger = require("../utils/logger")

mongoose
  .connect(process.env.DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch(err => {
    logger.error(err.stack);
    process.exit(1);
  });