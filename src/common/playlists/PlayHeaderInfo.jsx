import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import LevelBadge from "common/components/LevelBadge";
import Like from "common/components/Like/Like";
import { NhostClient } from "@nhost/nhost-js";

const nhost = new NhostClient({
  subdomain: "eotczmyygmencxertmeq",
  region: "eu-central-1"
});

const Author = ({ user, githubUsername }) => {
  return (
    <div className='header-author flex items-center gap-2'>
      <img
        className='rounded-full'
        src={user?.avatarUrl}
        width='25px'
        height='25px'
        alt='avatar'
      />
      <a
        href={`https://github.com/${githubUsername}`}
        target='_blank'
        className='play-anchor'
        rel='noopener noreferrer'
      >
        <strong>{user?.displayName}</strong>
      </a>
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <ul className='list-tags'>
      {tags.map((item, index) => (
        <li key={index}>
          <span className='play-tag'>{item.tag.name}</span>
        </li>
      ))}
    </ul>
  );
};

const PlayHeaderInfo = ({ play }) => {
  const likeHandler = async (e) => {
   await nhost.auth.signIn({
      provider: "google",
    });
  };
  return (
    <div className='header-leftcol overflow-hidden'>
      <div className='header-leftcol-action'>
        <Link to='/plays' className='action'>
          <IoMdArrowBack className='icon' size='24px' />
          <span className='sr-only'>Back</span>
        </Link>
      </div>
      <div className='header-leftcol-contents'>
        <div className='header-primary'>
          <h3 className='header-title'>{play.name}</h3>
          <div className='header-title-tags'>
            <LevelBadge level={play.level.name} />{" "}
            {!!play.play_tags.length && <Tags tags={play.play_tags} />}
          </div>
        </div>
        <div className='header-secondary'>
          {play.user && (
            <Author user={play.user} githubUsername={play.github} />
          )}
        </div>
      </div>
      <Like onLikeClick={likeHandler} />
    </div>
  );
};

export default PlayHeaderInfo;
