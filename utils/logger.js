const winston = require("winston");
const fs = require("fs");

const tsFormat = () => new Date().toLocaleTimeString();
const logDir = "log";

if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logger = new winston.createLogger({
  transports: [
    new winston.transports.File({
      filename: `${logDir}/full.log`,
      timestamp: tsFormat,
      level: process.env.LOG_LEVEL || "info"
    })
  ]
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      colorize: true,
      timestamp: tsFormat,
      level: "debug"
    })
  );
}

module.exports = logger;
