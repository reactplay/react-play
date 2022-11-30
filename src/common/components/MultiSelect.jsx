import { useEffect, useMemo, useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import { makeStyles } from "@mui/styles";
import { InputAdornment, ListSubheader, TextField } from "@mui/material";
import { compareTextValue } from "../utils/commonUtils";
import { IoMdClose } from "react-icons/io";

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
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    const updatedOptions = options.filter((option) =>
      compareTextValue(option.label, searchText)
    );
    setFilteredOptions(updatedOptions);
  }, [searchText, options.length]);

  useEffect(() => {
    if (
      filterQuery[filterKey].length > 0 &&
      filterQuery[filterKey].length === options.length - 1 &&
      !filterQuery[filterKey].includes(" ")
    ) {
      setFilterQuery({ ...filterQuery, [filterKey]: [" "] });
    }
  }, [filterQuery, setFilterQuery, options.length, filterKey]);

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
      if (value[0] === " ") {
        return "All";
      }
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

  const resetSearchText = () => setSearchText("");

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
          onClose={resetSearchText}
          input={<OutlinedInput label={label} />}
          renderValue={renderValueHandler}
          MenuProps={{
            classes: { paper: classes.menuPaper },
            autoFocus: false,
          }}
        >
          <ListSubheader>
            <TextField
              size="small"
              value={searchText}
              placeholder={`Search ${label}...`}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IoMdClose
                      onClick={resetSearchText}
                      className="cursor-pointer"
                      size="20px"
                    />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== "Escape") {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {filteredOptions.map((option) => (
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
