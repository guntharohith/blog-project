export function getFormattedDate(date) {
  date = new Date(date);
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
