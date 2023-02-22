export const countErrors = (actual: string, expected: string) => {
  const expectedChars = expected.split('');

  return expectedChars.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors++;
    }

    return errors;
  }, 0);
};

export const calculateAccuracyPercent = (errors: number, total: number) => {
  if (total > 0) {
    const correct = total - errors;

    return +((correct / total) * 100).toFixed(2);
  }

  return 0;
};
