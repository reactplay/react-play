import useGetContributorsDetails from "common/hooks/useGetContributorDetails";
import PlayThumbnail from "common/playlists/PlayThumbnail";
import React, { useEffect } from "react";
import * as all_plays from "plays";
import { toSanitized } from "common/services/string";
import { BsGithub, BsShare } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import { Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "plays/dev-jokes/Spinner";
import { TestimonialCard } from "./components/TestimonialCard";
import { regex } from "common/const/socialsRegex";

export const UserProfile = () => {
  // const {username} = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [contributor, skills, error, loading] = useGetContributorsDetails();

  const {
    resume_link,
    social_links,
    testimonials,
    bio,
    website,
    users_user_profile_map: { displayName, avatarUrl, email, plays } = {},
  } = contributor || {};

  console.log(social_links);
  const socials = () => {
    return Object.keys(regex).map((entry, index) => {
      const link = social_links?.find((link) => link.match(regex[entry].regex));
      return (
        <a key={index} href={link}>
          {entry}
        </a>
      );
    });
  };
  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-5 bg-gray-100 h-full flex">
      <div className="bg-white p-4 w-fit flex flex-col items-center mt-20 rounded-lg shadow-md">
        <img
          src={avatarUrl}
          alt="avatar"
          className="rounded-full w-28 -mt-20"
        />
        <h2 className="text-lg font-bold"> {displayName}</h2>

        {/* show only if current login user same as user whose profile we are on */}
        <Button
          className="rounded-md flex gap-1 "
          onClick={() => {
            navigate(pathname + "/edit");
          }}
        >
          <FiEdit2 className="icon" /> Edit Profile
        </Button>
        <Button className="rounded-md">
          <BsShare />
        </Button>
        <p>{email} </p>
        <a href={email} target="blank">
          <BsGithub className="icon" />
        </a>
        {socials()}
        <p> {bio}</p>
        <a href={website} target="_blank" rel="noreferrer">
          Website
        </a>
        {resume_link !== null ? (
          <a href={resume_link} target="_blank" rel="noreferrer">
            Resume
          </a>
        ) : (
          "Add resume"
        )}
      </div>

      <div className="w-full">
        {/* tabs */}
        <div className="flex flex-wrap border-b border-gray-200 text-gray-500">
          <NavLink
            to="/a"
            className={(isActive) =>
              `mr-2 inline-block rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2  hover:font-semibold
              ${isActive ? " border-gray-700 font-semibold" : ""}`
            }
          >
            Profile
          </NavLink>

          <NavLink
            to="/"
            className={
              "mr-2 inline-block  rounded-t-lg py-4 px-4 text-sm font-medium text-center border-b-2  "
            }
          >
            Dashboard
          </NavLink>
        </div>

        {/* Plays */}
        <ol className="list-plays">
          {plays?.map((play, index) => (
            <React.Fragment key={index}>
              {all_plays[
                play.component ? play.component : toSanitized(play.title_name)
              ] && <PlayThumbnail key={play.id} play={play} />}
            </React.Fragment>
          ))}
        </ol>
      </div>
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
