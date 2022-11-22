import React, { useState, useEffect, useMemo } from "react";
import useGetContributorsDetails from "common/hooks/useGetContributorDetails";
import PlayThumbnail from "common/playlists/PlayThumbnail";
import * as all_plays from "plays";
import { toSanitized } from "common/services/string";
import { BsGithub, BsShare } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "plays/dev-jokes/Spinner";
import { TestimonialCard } from "./components/TestimonialCard";
import { socilsRegex } from "common/const/socialsRegex";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Badge from "./components/Badge";
import { useAuthenticationStatus } from "@nhost/react";
import { isEmpty } from "lodash";
import "./index.css";
import { Skills } from "common/services/skills";

export const UserProfile = () => {
  const [value, setValue] = useState(0);
  // const {username} = useParams();
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [contributor, skills_map, error, dataLoading] =
    useGetContributorsDetails();

  const {
    resume_link,
    social_links,
    testimonials,
    bio,
    website,
    users_user_profile_map: { displayName, avatarUrl, email, plays } = {},
  } = contributor || {};

  // Need to figure out how we can get the proper play list for the user.
  const playsCount = useMemo(() => {
    const count = plays?.filter((play) => play.component !== null);
    return count?.length;
  }, [plays]);

  console.log(social_links);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`user-profile-tabpanel-${index}`}
        aria-labelledby={`user-profile-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `user-profile-tab-${index}`,
      "aria-controls": `user-profile-tabpanel-${index}`,
    };
  };

  const socials = () => {
    return Object.keys(socilsRegex).map((entry, index) => {
      const { regex, Icon } = socilsRegex[entry];
      const link = social_links?.find((link) => link.match(regex));
      if (!link) return null;
      return (
        <a key={index} href={link}>
          <Icon />
        </a>
      );
    });
  };
  const handleAddResume = () => {};

  if (dataLoading || isLoading) return <LoadingSpinner />;

  return (
    <div className="app-body contributor_page ">
      <div className="left_section ">
        <img
          src={avatarUrl}
          alt="avatar"
          className="rounded-full w-28 -mt-20"
        />
        <h2 className="text-lg font-bold"> {displayName}</h2>

        {/* show only if current login user same as user whose profile we are on */}
        {isAuthenticated ? (
          <Button
            className="rounded-md flex gap-1 "
            onClick={() => {
              navigate(pathname + "/edit");
            }}
          >
            <FiEdit2 className="icon" /> Edit Profile
          </Button>
        ) : null}

        <Button className="rounded-md">
          <BsShare />
        </Button>
        <p>{email} </p>
        <div className="flex ">{socials()}</div>
        <p> {bio}</p>
        <a href={website} target="_blank" rel="noreferrer">
          Website
        </a>
        {!isEmpty(resume_link) ? (
          <a href={resume_link} target="_blank" rel="noreferrer">
            Resume
          </a>
        ) : (
          <button className="btn-default-light " onClick={handleAddResume}>
            Add resume
          </button>
        )}
        {skills_map?.map(({ skill_id_map, expert_level_id_map }) => (
          <div>
            {skill_id_map.label}: {expert_level_id_map.label}
          </div>
        ))}
      </div>

      {/* Tabs */}
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleTabChange}
            aria-label="User profile details"
          >
            <Tab
              icon={<Badge count={playsCount} />}
              iconPosition="end"
              label="Plays"
              {...a11yProps(0)}
            />
            <Tab
              label="Contents"
              icon={<Badge />}
              iconPosition="end"
              {...a11yProps(1)}
            />
            <Tab
              label="Contributions"
              icon={<Badge />}
              iconPosition="end"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <ol className="list-plays">
            {plays?.map((play, index) => (
              <React.Fragment key={index}>
                {all_plays[
                  play.component ? play.component : toSanitized(play.title_name)
                ] && <PlayThumbnail key={play.id} play={play} />}
              </React.Fragment>
            ))}
          </ol>
        </TabPanel>
        <TabPanel value={value} index={1}>
          {" "}
          Content{" "}
        </TabPanel>
        <TabPanel value={value} index={2}>
          Contributions
        </TabPanel>
      </Box>
    </div>
  );
};

// const tags = [],
//   languages = [],
//   levels = [];
// useEffect(() => {
//   plays?.forEach((play) => {
//     tags.push(...play.play_tags.map((tag) => tag.tag.name));
//     languages.push(play.language);
//     levels.push(play.level.name);
//   });
// }, []);
// console.log(tags, languages, levels);
