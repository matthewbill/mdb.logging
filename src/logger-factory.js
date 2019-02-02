const winston = require('winston');
const EnvironmentNames = require('mdb-core');
const LogLevels = require('./log-levels');

class LoggerFactory {
  getLogger(environment, isDebug) {
    const self = this;
    const logLevel = self.getLogLevel(environment, isDebug);
    const logger = winston.createLogger({
      level: logLevel,
      transports: [
        new (winston.transports.Console)({ colorize: true, timestamp: true }),
      ],
    });
    logger.info(`Logger created with level of ${logLevel}.`);
    return logger;
  }

  getLogLevel(environment, isDebug) {
    // eslint-disable-next-line no-unused-vars
    const self = this;
    switch (environment) {
      case EnvironmentNames.PRODUCTION:
        return LogLevels.WARNING;
      case EnvironmentNames.STAGING:
        return LogLevels.INFORMATION;
      case EnvironmentNames.TEST:
        return LogLevels.INFORMATION;
      case EnvironmentNames.DEVELOPMENT:
        if (isDebug) {
          return LogLevels.DEBUG;
        }
        return LogLevels.VERBOSE;
      default: return LogLevels.DEBUG;
    }
  }
}
module.exports = LoggerFactory;
