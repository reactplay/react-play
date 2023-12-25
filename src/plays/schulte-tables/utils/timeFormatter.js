const timeFormatter = (time) => {
  const min = Math.floor(time / 60);
  const sec = time % 60;

  return `${min} Minutes ${sec} Seconds`;
};

export default timeFormatter;
