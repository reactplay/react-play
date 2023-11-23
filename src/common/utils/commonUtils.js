/**
 *
 * @param {String} optionText
 * @param {String} searchText
 * @returns Boolean
 */
export const compareTextValue = (optionText, searchText) => {
  if (typeof optionText === 'string') {
    return optionText.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  }

  return optionText?.props?.children[1].toLowerCase().indexOf(searchText.toLowerCase()) > -1;
};

/**
 *
 * @param {String} path cover path
 * @returns String
 */
export const getProdUrl = (path) => {
  return `https://reactplay.io${path}`;
};

/**
 *
 * @param {Array} obj
 * @param {String} key
 * @param {String} value
 * @returns Number
 */
export default function countByProp(obj, key, value) {
  return obj.reduce((acc, item) => (item?.[key] === value ? ++acc : acc), 0);
}

/**
 * Formats a date string in ISO 8601 format to the following format:
 * `Joined {day} {month} {year}`
 *
 * @param {string} dateString A date string in ISO 8601 format.
 * @returns {string} A formatted date string.
 */
export function formatDate(dateString) {
  if (!dateString) {
    return '';
  }

  const [datePart] = dateString.split('T');
  const [year, month, day] = datePart.split('-');

  // Convert the month number to the month name
  const monthName = Date(year, month, day).split(' ');

  const formattedDate = `Joined ${day} ${monthName[1]} ${year}`;

  return formattedDate;
}
