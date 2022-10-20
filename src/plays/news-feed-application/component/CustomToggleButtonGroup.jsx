import { useState, useEffect } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { categories } from "../countriesAndCategories";

const CustomToggleButtonGroup = ({
  selectedCategory,
  handleCategoryChange,
}) => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  const control = {
    value: selectedCategory,
    onChange: handleCategoryChange,
    exclusive: true,
  };

  const renderCatogories = () => {
    if (isDesktop) {
      return (
        <div>
          <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
            {categories.sort().map((category) => (
              <ToggleButton value={category} key={category}>
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      );
    } else {
      return (
        <FormControl size="small" className="menu-form-control">
          <InputLabel id="category-select-label">Category</InputLabel>
          <Select
            labelId="categoryselect-label"
            id="category-select"
            defaultValue={"general"}
            value={selectedCategory}
            label="Category"
            onChange={(e) => {
              handleCategoryChange(e);
            }}
          >
            {categories.map((category) => (
              <MenuItem value={category} key={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    }
  };

  return <div className="category-container">{renderCatogories()}</div>;
};

export default CustomToggleButtonGroup;
