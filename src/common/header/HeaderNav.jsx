import { useState } from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { IoAddSharp, IoShareSocial, IoHeartSharp } from "react-icons/io5";
import { MdManageSearch, MdClose } from "react-icons/md";
import SocialShare from "common/components/SocialShare";
import { GoX } from "react-icons/go";
import { Modal, Box, Typography, Menu } from "@mui/material";
import { useContext } from "react";
import { SearchContext } from "common/search/search-context";
// import LogOut from './Logout'

const HeaderNav = ({ showBrowse }) => {
  const { showShareModal, setShowShareModal } = useContext(SearchContext);

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
            sx={{
              display: "block",
              textAlign: "center",
              py: 2,
              fontFamily: "var(--ff-default)",
            }}
            component="div"
            variant="subtitle1"
          >
            Share about ReactPlay
          </Typography>
          <SocialShare />
          <Box
            component="div"
            sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}
          >
            <button className="modal-share-close" onClick={modalClose}>
              <GoX size="16px" className="icon" />{" "}
              <span className="sr-only">Cancel</span>
            </button>
          </Box>
        </Box>
      </Modal>
      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setShowToggleMenu(true)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={showToggleMenu ? "navbar-collapse show" : "navbar-collapse"}
      >
        <ul className="header-links">
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
                to="/plays"
                className="app-header-btn app-header-btn--secondary"
              >
                <MdManageSearch className="icon" />
                <span className="btn-label">Browse</span>
              </Link>
            </li>
          )}
          <li className="menu-spacer">
            {process.env.NODE_ENV === "development" ? (
              <a
                href="/plays/create"
                rel="noopener noreferrer"
                className="app-header-btn app-header-btn--primary"
              >
                <IoAddSharp className="icon" />
                <span className="btn-label">Create</span>
                <span className="create-button-badge">beta</span>
              </a>
            ) : (
              <a
                href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md"
                target="_blank"
                rel="noopener noreferrer"
                className="app-header-btn app-header-btn--primary"
              >
                <IoAddSharp className="icon" />
                <span className="btn-label">Create</span>
              </a>
            )}
          </li>
          <li>
            <Link
              to="/ideas"
              className="app-header-btn app-header-btn--default"
            >
              <FaLightbulb className="icon" />
              <span className="btn-label">Idea</span>
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/reactplay/react-play"
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
            <button
              className="app-header-btn app-header-btn--default"
              onClick={handleClick}
            >
              <IoHeartSharp className="icon" />
              <span className="btn-label">Share</span>
            </button>
          </li>
          {/* <LogOut /> */}
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <Box sx={{ p: 4, pt: 2, borderRadius: 2, width: "360px" }}>
              <h3 className="section-title">Show Love</h3>
              <button
                onClick={() => {
                  modalClose();
                  handleClose();
                }}
                className="my-2 btn-default-light"
                href="#"
              >
                <IoShareSocial className="icon" />
                <span className="btn-label">Share about ReactPlay</span>
              </button>
              <p className="mt-2 mb-8 leading-tight">
                <small>
                  Enjoying ReactPlay? Please help us spreading the word. You can
                  share about ReactPlay on any of your favorite social media
                  platforms.
                </small>
              </p>
              <a
                onClick={handleClose}
                target="_blank"
                rel="noopener noreferrer"
                className="my-2 btn-secondary-light"
                href="https://github.com/sponsors/reactplay"
              >
                <BiMoney className="icon" />
                <span className="btn-label">Sponsor ReactPlay</span>
              </a>
              <p className="mt-2 mb-4 leading-tight">
                <small>
                  Your support means a lot to us. Want to be our Sponsor and
                  support us?
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
