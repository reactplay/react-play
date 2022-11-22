import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSkillsList } from "common/hooks/useSkillsList";
import { useExpertLevelsList } from "common/hooks/useExpertiseLevelList";

export const EditProfile = () => {
  const [skills_List, skills_List_isLoading] = useSkillsList();
  const [expert_levels, expert_levels_isLoading] = useExpertLevelsList();

  const [skill_map, setSkill] = useState([{ skill: {}, level: {} }]);

  const navigate = useNavigate();

  const onSubmit = () => {};
  console.log(skill_map);
  const handleChange = (e) => {
    console.log(e.target.value);
    // setSkill(prev=> prev.at(-1).level)
  };
  return (
    <div className="p-5">
      <h1 className="section-title">Edit Profile</h1>
      <h2> Update your details here</h2>
      <FormControl>
        <Autocomplete
          freeSolo
          id="combo-box-demo"
          sx={{ width: 300 }}
          filterSelectedOptions
          options={skills_List}
          onChange={(e, newValue) =>
            setSkill((prev) => {
              const newArr = [...prev];
              newArr.at(-1).skill = newValue;
              return newArr;
            })
          }
          getOptionLabel={(option) => option.label}
          value={skill_map.at(-1).skill.label}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              placeholder="Skill"
              margin="normal"
            />
          )}
        />

        <Select
          placeholder="Expertise Level"
          id="demo-simple-select-standard"
          value={skill_map.at(-1).level.label || ""}
          onChange={handleChange}
        >
          {expert_levels.map((level) => (
            <MenuItem value={level} name={level.label} key={level.id}>
              {level.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button onClick={onSubmit}>Save</Button>
      <Button
        onClick={() => {
          navigate(-1);
        }}
      >
        Cancel
      </Button>
    </div>
  );
};
