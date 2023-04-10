/**
 * @param {Array} data
 * @param {number} perPage
 * @returns a object
 */
export const pageinate = (data = [], perPage = 10) => {
  const page = Math.ceil(data.length / perPage);

  const newData = Array.from({ length: page }, (_, index) => {
    const start = index * perPage;

    return data.slice(start, start + perPage);
  });

  return newData;
};
