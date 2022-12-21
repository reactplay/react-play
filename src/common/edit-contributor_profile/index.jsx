import React, { useEffect, useState } from 'react';
import { Button, FormControl } from '@mui/material';
import { useAccessToken } from '@nhost/react';
import { styled } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useSkillsList } from 'common/hooks/useSkillsList';
import { useExpertLevelsList } from 'common/hooks/useExpertiseLevelList';
import useGetContributorsDetails from 'common/hooks/useGetContributorDetails';
import { nhost } from 'common/routing/RouteDefs';

const CustomisedFormControl = styled(FormControl)`
  padding: 1rem;
  align-items: center;
  gap: 1rem;
`;
export const EditProfile = () => {
  const { id } = useParams();
  const accessToken = useAccessToken();
  const {
    contributor,
    error,
    loading: dataLoading,
    updateUserProfile
  } = useGetContributorsDetails(id);

  const {
    resume_link,
    social_links,
    photo_link,
    bio,
    website,
    users_user_profile_map: { displayName, avatarUrl, email, plays } = {}
  } = contributor || {};

  const [skills_List, skills_List_isLoading] = useSkillsList();
  const [expert_levels, expert_levels_isLoading] = useExpertLevelsList();

  const [skill_map, setSkill] = useState([{ skill: {}, level: {} }]);

  const [imageUri, setImageUri] = useState(null);
  const [state, setState] = useState({ photo_link: '', social_links: [] });
  useEffect(() => {
    setState({
      photo_link: photo_link || avatarUrl,
      social_links,
      bio
    });
  }, [contributor]);

  const navigate = useNavigate();

  const uploadImage = async () => {
    // nhost.storage.setAccessToken(accessToken);
    try {
      const result = await nhost.storage.upload({
        file: imageUri,
        bucketId: 'user_avatar'
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateUserProfile(state);
  };

  const handleChange = (e) => {
    setSkill((prev) => {
      const newArr = [...prev];
      newArr.at(-1).level = e.target.value;
      return newArr;
    });
  };
  // console.log(state);

  if (dataLoading) return <div>Loadings...</div>;
  return (
    <div className="p-5">
      <h1 className="section-title">Edit Profile</h1>
      <h2> Update your details here</h2>
      <CustomisedFormControl className="">
        <h2>Name: {displayName}</h2>
        <div className="flex gap-4 items-center">
          {imageUri && (
            <>
              <img src={imageUri} alt="avatar" className="rounded-full w-28 " />
              <button onClick={uploadImage}>Upload</button>
            </>
          )}
          <input
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              setImageUri(e.target.files[0]);
              // const reader = new FileReader();
              // reader.readAsDataURL(e.target.files[0]);
              // reader.onload = () => {
              //   setState((prev) => ({
              //     ...prev,
              //     photo_link: reader.result,
              //   }));
              // };
            }}
          />
        </div>

        <textarea
          value={state.bio}
          onChange={(e) => {
            setState((prev) => ({ ...prev, bio: e.target.value }));
          }}
        />
        {Array(5)
          .fill('')
          .map((el, i) => {
            return (
              <input
                className="bg-stone-50 text-sm p-3  focus:outline-none rounded-lg w-full  border-solid border  border-stone-400"
                type="url"
                value={state.social_links?.[i] ?? ''}
                onChange={(e) => {
                  setState((prev) => {
                    const newArr = [...prev.social_links];
                    newArr[i] = e.target.value;
                    return {
                      ...prev,
                      social_links: newArr
                    };
                  });
                }}
              />
            );
          })}
      </CustomisedFormControl>
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

{
  /* <Autocomplete
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
        />*/
}

{
  /* <Select
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
        </Select> */
}
