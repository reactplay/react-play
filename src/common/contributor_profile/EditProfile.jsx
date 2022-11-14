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

const expert_levels = [
  {
    id: "86d0a64d-135c-4ce1-9869-a8150580bb91",
    label: "Novice",
  },
  {
    id: "e8999abe-3253-4ded-84d1-3f7bc236077f",
    label: "Adv. Beginner",
  },
  {
    id: "3708e27a-daea-44db-b8a8-65e253ec08cb",
    label: "Competent",
  },
  {
    id: "0b03e8ba-e2a6-4959-8ff3-43bdef3a701c",
    label: "Proficient",
  },
  {
    id: "a122912a-3d08-43da-9833-39ad159d6171",
    label: "Expert",
  },
];
export const EditProfile = () => {
  const [skills_List, loading] = useSkillsList();

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
      <h1>Edit Profile</h1>
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
