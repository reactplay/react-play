
import { useState } from 'react';
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub } from 'react-icons/bs';
import { IoAddSharp, IoShareSocial } from 'react-icons/io5';
import { MdManageSearch, MdClose } from 'react-icons/md';
import SocialShare from 'common/components/SocialShare';
import { Modal } from "common";

const HeaderNav = ({ showBrowse }) => {
  const [showSocial, setShowSocial] = useState(false);
  const [showToggleMenu, setShowToggleMenu] = useState(false);
  return (
    <nav>
      <Modal
        title="Share about ReactPlay"
        onClose={() => setShowSocial(false)}
        show={showSocial}
        cname="share"
        children={
          <SocialShare />
        }
      />
      <button className="navbar-toggler" type="button" onClick={() => setShowToggleMenu(true)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={showToggleMenu ? 'navbar-collapse show' : 'navbar-collapse'}>
        <ul className="header-links">
          <li className='menu-closer'>
            <button className="navbar-closer" type="button" onClick={() => setShowToggleMenu(false)}>              
              <MdClose className='navbar-closer-icon' />
              <span className='sr-only'>Close</span>
            </button>
          </li>
          {showBrowse && (
            <li>
              <Link to="/plays" className="app-header-btn app-header-btn--secondary">
                <MdManageSearch className="icon" />
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
              className="app-header-btn app-header-btn--default"
            >
              <BsGithub className="icon" />
              <span className="btn-label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/reactplayio"
              target="_blank"
              rel="noopener noreferrer"
              className="app-header-btn app-header-btn--default"
            >
              <BsTwitter className="icon" />
              <span className="btn-label">Twitter</span>
            </a>
          </li>
          <li>
            <button className="app-header-btn app-header-btn--default"
              onClick={() => setShowSocial(true)}>
              <IoShareSocial className="icon" />
              <span className="btn-label">Share</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
