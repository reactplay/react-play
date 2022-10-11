import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { categories } from "../data";


const CustomToggleButtonGroup = ({ selectedCategory, handleCategoryChange}) => {
  const control = {
    value: selectedCategory,
    onChange: handleCategoryChange,
    exclusive: true,
  };

    return (
      <div className="category-container">
        <div> Category :</div>
        <div>
          <ToggleButtonGroup size="small" {...control} aria-label="Small sizes">
            {categories.sort().map((category) => (
              <ToggleButton value={category} key={category}>
                {category}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </div>
      </div>
    );
  };

  export default CustomToggleButtonGroup;