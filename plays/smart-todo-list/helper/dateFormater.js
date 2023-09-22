export const formatDate = (time) => {
  const date = new Date(time).toLocaleDateString();

  return date;
};
