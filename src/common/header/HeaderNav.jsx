import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter, BsGithub, BsTrophyFill } from 'react-icons/bs';
import { FaLightbulb } from 'react-icons/fa';
import { BiMoney } from 'react-icons/bi';
import { IoAddSharp, IoShareSocial, IoHeartSharp } from 'react-icons/io5';
import { MdManageSearch, MdClose, MdEvent } from 'react-icons/md';
import SocialShare from 'common/components/SocialShare';
import { GoX } from 'react-icons/go';
import { Modal, Box, Typography, Menu } from '@mui/material';
import { useSearchContext } from 'common/search/search-context';
import { CREATE_PLAY_DOC_LINK, UMAMI_EVENTS } from 'constants';

const HeaderNav = ({ showBrowse }) => {
  const { showShareModal, setShowShareModal } = useSearchContext();

  const [showToggleMenu, setShowToggleMenu] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const modalClose = () => setShowShareModal(!showShareModal);

  return (
    <nav>
      <Modal open={showShareModal} onClose={modalClose}>
        <Box className="modal-share">
          <Typography
            component="div"
            sx={{
              display: 'block',
              textAlign: 'center',
              py: 2,
              fontFamily: 'var(--ff-default)'
            }}
            variant="subtitle1"
          >
            Share about ReactPlay
          </Typography>
          <SocialShare showFB showLinkedin showReddit showTwitter />
          <Box component="div" sx={{ mt: 4, display: 'flex', justifyContent: 'flex-end' }}>
            <button className="modal-share-close" onClick={modalClose}>
              <GoX className="icon" size="16px" /> <span className="sr-only">Cancel</span>
            </button>
          </Box>
        </Box>
      </Modal>
      <button
        aria-expanded={showToggleMenu}
        aria-label="Toggle menu"
        className="navbar-toggler"
        type="button"
        onClick={() => setShowToggleMenu(true)}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={showToggleMenu ? 'navbar-collapse show' : 'navbar-collapse'}>
        <ul className="header-links" data-testid="header-links-container">
          <li className="menu-closer">
            <button
              className="navbar-closer"
              type="button"
              onClick={() => setShowToggleMenu(false)}
            >
              <MdClose className="navbar-closer-icon" />
              <span className="sr-only">Close</span>
            </button>
          </li>

          {showBrowse && !showToggleMenu && (
            <li>
              <Link
                className="app-header-btn app-header-btn--secondary"
                data-testid="browse-btn"
                to="/plays"
              >
                <MdManageSearch className="icon" />
                <span className="btn-label">Browse</span>
              </Link>
            </li>
          )}
          <li>
            <a
              className="app-header-btn app-header-btn--secondary"
              data-testid="events-btn"
              href="https://hustles.reactplay.io/"
              target="_blank"
            >
              <MdEvent className="icon" />
              <span className="btn-label">Events</span>
            </a>
          </li>
          <li className="menu-spacer">
            {process.env.NODE_ENV === 'development' ? (
              <a
                className="app-header-btn app-header-btn--primary"
                data-testid="create-btn"
                href="/plays/create"
                rel="noopener noreferrer"
              >
                <IoAddSharp className="icon" />
                <span className="btn-label">Create</span>
              </a>
            ) : (
              <a
                className="app-header-btn app-header-btn--primary"
                data-testid="create-btn"
                data-umami-event={UMAMI_EVENTS.CREATE_PLAY_BUTTON}
                href={CREATE_PLAY_DOC_LINK}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IoAddSharp className="icon" />
                <span className="btn-label">Create</span>
              </a>
            )}
          </li>
          <li>
            <Link
              className="app-header-btn app-header-btn--default"
              data-testid="leaderboard-btn"
              title="Leader Board"
              to="/leaderboard"
            >
              <BsTrophyFill className="icon idea-icon" />
              <span className="btn-label">Leader Board</span>
            </Link>
          </li>
          <li>
            <Link
              className="app-header-btn app-header-btn--default"
              data-testid="ideas-btn"
              title="Play Ideas"
              to="/ideas"
            >
              <FaLightbulb className="icon idea-icon" />
              <span className="btn-label">Idea</span>
            </Link>
          </li>
          <li>
            <a
              className="app-header-btn app-header-btn--default"
              data-testid="github-btn"
              data-umami-event="github-button"
              href="https://github.com/reactplay/react-play"
              rel="noopener noreferrer"
              target="_blank"
              title="GitHub page"
            >
              <BsGithub className="icon github-icon" />
              <span className="btn-label">GitHub</span>
            </a>
          </li>
          <li>
            <a
              className="app-header-btn app-header-btn--default"
              data-testid="twitter-btn"
              href="https://twitter.com/reactplayio"
              rel="noopener noreferrer"
              target="_blank"
              title="Twitter Page"
            >
              <BsTwitter className="icon twitter-icon" />
              <span className="btn-label">Twitter</span>
            </a>
          </li>
          <li>
            <button
              className="app-header-btn app-header-btn--default"
              data-testid="share-btn"
              title="Show love"
              onClick={handleClick}
            >
              <IoHeartSharp className="icon share-icon" />
              <span className="btn-label">Share</span>
            </button>
          </li>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <Box sx={{ p: 4, pt: 2, borderRadius: 2, width: '360px' }}>
              <h3 className="section-title">Show Love</h3>
              <button
                className="my-2 btn-default-light"
                href="#"
                onClick={() => {
                  modalClose();
                  handleClose();
                }}
              >
                <IoShareSocial className="icon" />
                <span className="btn-label">Share about ReactPlay</span>
              </button>
              <p className="mt-2 mb-8 leading-tight">
                <small>
                  Enjoying ReactPlay? Please help us spreading the word. You can share about
                  ReactPlay on any of your favorite social media platforms.
                </small>
              </p>
              <a
                className="my-2 btn-secondary-light"
                href="https://github.com/sponsors/reactplay"
                rel="noopener noreferrer"
                target="_blank"
                onClick={handleClose}
              >
                <BiMoney className="icon" />
                <span className="btn-label">Sponsor ReactPlay</span>
              </a>
              <p className="mt-2 mb-4 leading-tight">
                <small>
                  Your support means a lot to us. Want to be our Sponsor and support us?
                </small>
              </p>
            </Box>
          </Menu>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
