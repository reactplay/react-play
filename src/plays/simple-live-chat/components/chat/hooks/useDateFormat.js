import format from "date-fns/format";

const useDateFormat = () => {
  const dateTimeFormatter = (val, formatText = "hh:mm bbb") => {
    return format(new Date(val * 1000), formatText);
  };

  return [dateTimeFormatter];
};

export default useDateFormat;