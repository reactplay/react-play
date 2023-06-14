export function randomizeArray(values) {
  let index = values.length;
  let randomIndex = 0;

  while (index !== 0) {
    randomIndex = Math.floor(Math.random() * index--);

    [values[index], values[randomIndex]] = [values[randomIndex], values[index]];
  }

  return values;
}
