import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import LevelBadge from "common/components/LevelBadge";
import { NhostClient } from "@nhost/nhost-js";
import MuiModal from "common/modal/MuiModal";
import { useAuthenticated } from "@nhost/react";
import SignInMethods from "./SignInMethods";
import { useState } from "react";

const nhost = new NhostClient({
  subdomain: process.env.REACT_APP_NHOST_SUBDOMAIN,
  region: process.env.REACT_APP_NHOST_REGION,
});

const Author = ({ user, githubUsername }) => {
  return (
    <div className="header-author flex items-center gap-2">
      <img
        className="rounded-full"
        src={user?.avatarUrl}
        width="25px"
        height="25px"
        alt="avatar"
      />
      <a
        href={`https://github.com/${githubUsername}`}
        target="_blank"
        className="play-anchor"
        rel="noopener noreferrer"
      >
        <strong>{user?.displayName}</strong>
      </a>
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul className="list-tags">
      {tags.map((item, index) => (
        <li key={index}>
          <span className="play-tag">{item.tag.name}</span>
        </li>
      ))}
    </ul>
  );
};

const PlayHeaderInfo = ({ play }) => {
  const [showSignInMethods, setShowSignInMethods] = useState(false);
  const isAuthenticated = useAuthenticated();

  // handle the Button Clicks
  const handleLogin = async (value) => {
    return await nhost.auth.signIn({
      provider: value,
      options: {
        redirectTo: window.location.href,
      },
    });
  };

  // handles the modal
  const modalHandler = (e) => {
    if (!isAuthenticated) {
      return setShowSignInMethods(!showSignInMethods);
    }
    return null;
  };

  // actual lik

  return (
    <div className="header-leftcol overflow-hidden">
      <div className="header-leftcol-action">
        <Link to="/plays" className="action">
          <IoMdArrowBack className="icon" size="24px" />
          <span className="sr-only">Back</span>
        </Link>
      </div>
      <div className="header-leftcol-contents">
        <div className="header-primary">
          <h3 className="header-title">{play.name}</h3>
          <div className="header-title-tags">
            <LevelBadge level={play.level.name} />{" "}
            {!!play.play_tags.length && <Tags tags={play.play_tags} />}
          </div>
        </div>
        <div className="header-secondary">
          {play.user && (
            <Author user={play.user} githubUsername={play.github} />
          )}
        </div>
      </div>
      <MuiModal
        open={showSignInMethods}
        handleClose={modalHandler}
        component={<SignInMethods loginHandler={handleLogin} />}
      />
    </div>
  );
};

export default PlayHeaderInfo;
