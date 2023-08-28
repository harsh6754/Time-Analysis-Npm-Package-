// index.js
const dateUtils = require("./src/date-utils");
const timeUtils = require("./src/time-utils");

module.exports = {
  ...dateUtils,
  ...timeUtils,
};
