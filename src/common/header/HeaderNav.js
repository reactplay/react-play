
import { useState } from 'react';
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { IoSearch, IoAddSharp, IoShareSocial } from 'react-icons/io5';
import SocialShare from 'common/components/SocialShare';
import { Modal } from "common";

const HeaderNav = ({ showBrowse }) => {
  const [showSocial, setShowSocial] = useState(false);
  return (
    <nav>
      <Modal
        title="Share"
        onClose={() => setShowSocial(false)}
        show={showSocial}
        cname="share"
        children={
          <SocialShare />
        }
      />
      <ul className="header-links">
        {showBrowse && (
          <li>
            <Link to="/plays" className="app-header-btn">
              <IoSearch className="icon" />
              <span className="btn-label">Browse</span>
            </Link>
          </li>
        )}
        <li className="menu-spacer">
          <a
            href="https://github.com/atapas/react-play/blob/main/CREATE-PLAY.md"
            target="_blank"
            rel="noopener noreferrer"
            className="app-header-btn app-header-btn--primary"
          >
            <IoAddSharp className="icon" />
            <span className="btn-label">Create</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/atapas/react-play"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="icon" />
            <span className="sr-only">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/reactplayio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsTwitter className="icon" />
            <span className="sr-only">Twitter</span>
          </a>
        </li>
        <li>
          <button
            onClick={() => setShowSocial(true)}>
            <IoShareSocial className="icon" />
            <span className="sr-only">Share</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
