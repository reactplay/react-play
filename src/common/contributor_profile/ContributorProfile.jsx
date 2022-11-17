import useGetContributorsDetails from "common/hooks/useGetContributorDetails";
import PlayThumbnail from "common/playlists/PlayThumbnail";
import React, { useEffect } from "react";
import * as all_plays from "plays";
import { toSanitized } from "common/services/string";
import { BsGithub } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "plays/dev-jokes/Spinner";
import { TestimonialCard } from "./components/TestimonialCard";
import { regex } from "common/const/socialsRegex";

const UserProfile = () => {
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

  const socials = () => {
    return Object.keys(regex).map((entry, index) => {
      const link = social_links.find((link) => link.match(regex[entry].regex));
      return (
        <a key={index} href={link}>
          {entry}
        </a>
      );
    });
  };
  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-5">
      <h2 className="text-lg "> {displayName}</h2>

      {/* show only if current login user same as user whose profile we are on */}
      <Button
        onClick={() => {
          navigate(pathname + "/edit");
        }}
      >
        <BiEdit className="icon" />
      </Button>
      <img src={avatarUrl} alt="avatar" className="w-20" />
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

      {/* Blogs */}

      {/* Testimonials */}
      <h2 className="text-lg font-semibold"> Testimonials</h2>
      {testimonials?.map((testimonial) => (
        <TestimonialCard testimonial={testimonial} />
      ))}
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

export default UserProfile;