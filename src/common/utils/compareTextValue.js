export const compareTextValue = (text, searchText, dataType) => {
  if (dataType === "string") {
    return text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
  }
  return (
    text?.props?.children[1].toLowerCase().indexOf(searchText.toLowerCase()) >
    -1
  );
};
