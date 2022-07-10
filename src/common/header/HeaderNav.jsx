import { useState } from "react";
import { Link } from "react-router-dom";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLightbulb } from "react-icons/fa";
import { BiMoney } from "react-icons/bi";
import { IoAddSharp, IoShareSocial, IoHeartSharp } from "react-icons/io5";
import { MdManageSearch, MdClose } from "react-icons/md";
import SocialShare from "common/components/SocialShare";
import { GoX } from "react-icons/go";
import { Modal, Box, Typography, Menu, Link as MuiLink } from "@mui/material";
import { useContext } from "react";
import { SearchContext } from "common/search/search-context";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 2,
  boxShadow: 24,
  px: 4,
  py: 2,
};

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
        <Box sx={style}>
          <Typography
            sx={{ display: "block", textAlign: "center", py: 2 }}
            component='div'
            variant='h5'
          >
            Share about ReactPlay
          </Typography>
          <SocialShare />
          <Box
            component='div'
            sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}
          >
            <button
              className='btn-default-light btn-size--sm'
              onClick={modalClose}
            >
              <GoX size='16px' className='icon' /> Cancel
            </button>
          </Box>
        </Box>
      </Modal>
      <button
        className='navbar-toggler'
        type='button'
        onClick={() => setShowToggleMenu(true)}
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div
        className={showToggleMenu ? "navbar-collapse show" : "navbar-collapse"}
      >
        <ul className='header-links'>
          <li className='menu-closer'>
            <button
              className='navbar-closer'
              type='button'
              onClick={() => setShowToggleMenu(false)}
            >
              <MdClose className='navbar-closer-icon' />
              <span className='sr-only'>Close</span>
            </button>
          </li>
          {showBrowse && !showToggleMenu && (
            <li>
              <Link
                to='/plays'
                className='app-header-btn app-header-btn--secondary'
              >
                <MdManageSearch className='icon' />
                <span className='btn-label'>Browse</span>
              </Link>
            </li>
          )}
          <li className='menu-spacer'>
            <a
              href='https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md'
              target='_blank'
              rel='noopener noreferrer'
              className='app-header-btn app-header-btn--primary'
            >
              <IoAddSharp className='icon' />
              <span className='btn-label'>Create</span>
            </a>
          </li>
          <li>
            <Link
              to='/ideas'
              className='app-header-btn app-header-btn--default'
            >
              <FaLightbulb className='icon' />
              <span className='btn-label'>Idea</span>
            </Link>
          </li>
          <li>
            <a
              href='https://github.com/reactplay/react-play'
              target='_blank'
              rel='noopener noreferrer'
              className='app-header-btn app-header-btn--default'
            >
              <BsGithub className='icon' />
              <span className='btn-label'>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href='https://twitter.com/reactplayio'
              target='_blank'
              rel='noopener noreferrer'
              className='app-header-btn app-header-btn--default'
            >
              <BsTwitter className='icon' />
              <span className='btn-label'>Twitter</span>
            </a>
          </li>
          <li>
            <button
              className='app-header-btn app-header-btn--default'
              onClick={handleClick}
            >
              <IoHeartSharp className='icon' />
              <span className='btn-label'>Share</span>
            </button>
          </li>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <Box sx={{ p: 3, pt: 1, borderRadius: 2, width: "360px" }}>
              <Typography sx={{ py: 1 }} variant='h5'>
                Show Love
              </Typography>
              <button
                onClick={() => {
                  modalClose();
                  handleClose()
                }}
                className='my-2 btn-default-light'
                href='#'
              >
                <IoShareSocial className='icon' />
                <span className='btn-label'>Share about ReactPlay</span>
              </button>
              <Typography className='mt-2 mb-10'>
                Enjoying ReactPlay? Please help us spreading the word. You can share about
                ReactPlay on any of your favorite social media platforms.
              </Typography>
              <a
                onClick={handleClose}
                target='_blank'
                className='my-2 btn-secondary-light'
                href='https://github.com/sponsors/atapas'
              >
                <BiMoney className='icon' />
                <span className='btn-label'>Sponsor ReactPlay</span>
              </a>
              <Typography className='mt-2 mb-4'>
                Your support means a lot to us. Want to be our Sponsor and support us?
              </Typography>
            </Box>
          </Menu>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderNav;
