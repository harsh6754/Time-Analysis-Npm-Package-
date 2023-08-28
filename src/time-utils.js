// src/time-utils.js
function getCurrentTime() {
  // Get the current time as a string
  const now = new Date();
  return now.toLocaleTimeString();
}

function convertToTimeZone(time, fromTimeZone, toTimeZone) {
  // Convert a time from one time zone to another
  // (You can use libraries like 'luxon' or 'moment-timezone' for this)
}

module.exports = {
  getCurrentTime,
  convertToTimeZone,
};
