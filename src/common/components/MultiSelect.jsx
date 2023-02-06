import { useEffect, useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { makeStyles } from '@mui/styles';
import { InputAdornment, ListSubheader, TextField } from '@mui/material';
import { compareTextValue } from '../utils/commonUtils';
import { IoMdClose } from 'react-icons/io';

const useStyles = makeStyles({
  menuPaper: {
    maxHeight: '250px !important'
  }
});

export default function MultipleSelectCheckmarks({
  options,
  label,
  loading
}) {
  const classes = useStyles();
  const [selectedData, setSelectedData] = useState([])
  const [searchText, setSearchText] = useState('');
  const [compLoading, setCompLoading] = useState(true);
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    console.log(`XXX : Data from ${loading} FilterPlaysModalBody${JSON.stringify(options)}`)
  }, [options.length]);

  
  const handleChange = (event) => {
    // const {
    //   target: { value }
    // } = event;
    // if (value.length === 0) {
    //   setFilterQuery({ ...filterQuery, [filterKey]: [] });
    // } else if (value.indexOf(' ') > -1) {
    //   const updatedValues = value.filter((id) => id !== ' ');
    //   if (updatedValues.length && value[value.length - 1] !== ' ') {
    //     setFilterQuery({ ...filterQuery, [filterKey]: updatedValues });
    //   } else {
    //     setFilterQuery({ ...filterQuery, [filterKey]: [' '] });
    //   }
    // } else {
    //   const updatedValues = value.filter((id) => id !== ' ');
    //   setFilterQuery({ ...filterQuery, [filterKey]: updatedValues });
    // }
  };

  const renderValueHandler = (value) => {
    // if (filterKey === 'owner_user_id') {
    //   if (value[0] === ' ') {
    //     return 'All';
    //   }

    //   return options
    //     .filter((option) => value.includes(option.value))
    //     .map((option) => option?.label?.props?.children[1])
    //     .join(', ');
    // }

    // return options
    //   .filter((option) => filterQuery[filterKey].includes(option.value))
    //   .map((option) => option.label)
    //   .join(', ');
  };

  const resetSearchText = () => setSearchText('');

  return (
    
    <div>
      {loading || compLoading ? null : (<FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">{label}</InputLabel>
        <Select
          multiple
          MenuProps={{
            classes: { paper: classes.menuPaper },
            autoFocus: false
          }}
          input={<OutlinedInput label={label} />}
          labelId="demo-multiple-checkbox-label"
          renderValue={renderValueHandler}
          // MUI Select requires list as values,
          // so, if no values are present we will assign empty list
          value={selectedData}
          onChange={handleChange}
          onClose={resetSearchText}
        >
          <ListSubheader>
            <TextField
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IoMdClose className="cursor-pointer" size="20px" onClick={resetSearchText} />
                  </InputAdornment>
                )
              }}
              placeholder={`Search ${label}...`}
              size="small"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key !== 'Escape') {
                  // Prevents autoselecting item while typing (default Select behaviour)
                  e.stopPropagation();
                }
              }}
            />
          </ListSubheader>
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              <Checkbox
                checked={
                  filterQuery[filterKey].indexOf(option.value) > -1 ||
                  filterQuery[filterKey].includes(' ')
                }
              />
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>)}
      
    </div>
  );
}
