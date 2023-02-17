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

export function formatDate(data) {
  if (data === undefined) return '';
  const dataarr = data.split('T')[0].split('-');
  const day = dataarr[2];
  const month = dataarr[1];
  const year = dataarr[0];
  const datemonth = Date(year, month, day).split(' ');

  return `Joined ${day} ${datemonth[1]} ${year}`;
}
