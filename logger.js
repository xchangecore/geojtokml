const winston = require('winston');

const config = {
    transports: [
        new winston.transports.Console
    ]
};

module.exports = winston.createLogger(config);