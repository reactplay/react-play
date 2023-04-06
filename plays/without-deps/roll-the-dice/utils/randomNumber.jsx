/**
 *
 * @param {number} start
 * @param {number} end
 * @returns a random number between provided start and end values
 */

export const randomNumber = (start = 0, end = 6) => {
  const f = start === 0 ? null : start;
  const l = end === 1 ? 2 : end;
  const randNumber = Math.floor(Math.random() * l) + f;

  return randNumber;
};
