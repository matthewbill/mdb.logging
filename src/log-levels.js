/**
 * @copyright Matthew Bill
*/

/**
 * Class representing static strings for log levels.
 * @class LogLevels
 */
class LogLevels {
  static get ERROR() { return 'error'; }

  static get WARNING() { return 'warn'; }

  static get INFORMATION() { return 'info'; }

  static get VERBOSE() { return 'verbose'; }

  static get DEBUG() { return 'debug'; }

  static get SILLY() { return 'silly'; }
}

module.exports = LogLevels;
