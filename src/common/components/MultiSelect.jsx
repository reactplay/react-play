import { useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  menuPaper: {
    maxHeight: "250px !important",
  },
});

export default function MultipleSelectCheckmarks({
  filterQuery,
  setFilterQuery,
  options,
  filterKey,
  label,
}) {
  const classes = useStyles();

  useEffect(() => {
    if (
      filterQuery[filterKey].length > 0 &&
      filterQuery[filterKey].length === options.length - 1 &&
      !filterQuery[filterKey].includes(" ")
    ) {
      setFilterQuery({ ...filterQuery, [filterKey]: [" "] });
    }
  }, [filterQuery, setFilterQuery, options, filterKey]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    if (value.length === 0) {
      setFilterQuery({ ...filterQuery, [filterKey]: [] });
    } else if (value.indexOf(" ") > -1) {
      const updatedValues = value.filter((id) => id !== " ");
      if (updatedValues.length && value[value.length - 1] !== " ") {
        setFilterQuery({ ...filterQuery, [filterKey]: updatedValues });
      } else {
        setFilterQuery({ ...filterQuery, [filterKey]: [" "] });
      }
    } else {
      const updatedValues = value.filter((id) => id !== " ");
      setFilterQuery({ ...filterQuery, [filterKey]: updatedValues });
    }
  };

  const renderValueHandler = (value) => {
    if (filterKey === "owner_user_id") {
      return options
        .filter((option) => value.includes(option.value))
        .map((option) => option?.label?.props?.children[1])
        .join(", ");
    }
    return options
      .filter((option) => filterQuery[filterKey].includes(option.value))
      .map((option) => option.label)
      .join(", ");
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={filterQuery[filterKey]}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          renderValue={renderValueHandler}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                checked={
                  filterQuery[filterKey].indexOf(option.value) > -1 ||
                  filterQuery[filterKey].includes(" ")
                }
              />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
