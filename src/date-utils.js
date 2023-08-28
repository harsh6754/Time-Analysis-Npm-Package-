// src/date-utils.js
function formatDate(date) {
  // Format a JavaScript Date object as a string
  return date.toLocaleDateString();
}

function calculateAge(birthdate) {
  // Calculate the age based on a birthdate
  const today = new Date();
  const birth = new Date(birthdate);
  const age = today.getFullYear() - birth.getFullYear();
  if (
    today < new Date(today.getFullYear(), birth.getMonth(), birth.getDate())
  ) {
    age--;
  }
  return age;
}

module.exports = {
  formatDate,
  calculateAge,
};
