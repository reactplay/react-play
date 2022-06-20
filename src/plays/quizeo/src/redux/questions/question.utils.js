export const calculateScore = (score, answer) => {
  if (answer.answer) {
    if (answer.answer === answer.correct) {
      score += 1;
      return score;
    }
    return score;
  }
};
