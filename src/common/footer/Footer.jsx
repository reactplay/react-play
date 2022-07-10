import { useEffect, useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoAddSharp, IoLogoRss } from "react-icons/io5";
import { MdManageSearch } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";
import LogoLight from "images/img-logo-light.svg";
import { SearchContext } from "common/search/search-context";

const Footer = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const { showShareModal, setShowShareModal } = useContext(SearchContext);

  const [showHideBits, setShowHideBits] = useState({
    setFooterStyle: true,
    showExtendedFooter: true,
  });

  useEffect(() => {
    if (pathName === "/") {
      setShowHideBits((prev) => ({
        ...prev,
        setFooterStyle: false,
        showExtendedFooter: true,
      }));
    } else {
      setShowHideBits((prev) => ({
        ...prev,
        setFooterStyle: true,
        showExtendedFooter: false,
      }));
    } 
  }, [pathName]);

  return (
    <footer
      className={`app-footer ${
        showHideBits.setFooterStyle ? "" : " app-footer--home"
      }`}
    >
      {showHideBits.showExtendedFooter && <div className='app-footer-body'>
        <div className='body-primary'>
          <h3>
            <span className='sr-only'>ReactPlay</span>
            <img src={LogoLight} alt='Logo of ReactPlay' />
          </h3>
          <p className='p-lg'>
            An open-source project made with ❤️ by 
            <a 
            href="https://tapasadhikary.com"
            className='social-link'
            target='_blank'
            rel='noopener noreferrer'>Tapas Adhikary</a> and friends.
          </p>
          <p>
            <small>Connect with us</small>
            <ul className='social-links'>
              <li>
                <a
                  href='https://twitter.com/reactplayio'
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsTwitter className='icon' />
                  <span className='sr-only'>Twitter</span>
                </a>
              </li>
              <li>
                <a
                  href='https://github.com/reactplay'
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <BsGithub className='icon' />
                  <span className='sr-only'>Github</span>
                </a>
              </li>
              <li>
                <a
                  href='https://discord.gg/vrTxWUP8Am'
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaDiscord className='icon' />
                  <span className='sr-only'>Discord</span>
                </a>
              </li>
              <li>
                <a
                  href='https://blog.reactplay.io/'
                  className='social-link'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <IoLogoRss className='icon' />
                  <span className='sr-only'>BlogPost</span>
                </a>
              </li>
            </ul>
          </p>
          <p>
            <small>Email us</small>{" "}
            <div>
              <a
                href='mailto:contact@reactplay.io'
                target='_blank'
                rel='noopener noreferrer'
                className='text-link-default'
              >
                contact@reactplay.io
              </a>
            </div>
          </p>
        </div>
        <div className='body-secondary'>
          <h3 className='section-title mt-3'>About</h3>
          <p className='mb-4'>
            ReactPlay is an opensource platform that helps you Learn, create and
            sharing ReactJS projects with the developer community.
          </p>
          <div className='flex flex-wrap gap-1'>
            <a
              href='https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md'
              target='_blank'
              rel='noopener noreferrer'
              className='btn-primary mr-2'
            >
              <IoAddSharp className='icon' />
              <span className='btn-label'>Create</span>
            </a>
            <Link to='/plays' className='btn-default-light'>
              <MdManageSearch className='icon' />
              <span className='btn-label'>Browse</span>
            </Link>
          </div>
          <p className='mt-10'>
            Not sure how to get started? <br />
            We have a lot of ideas for you to get started.
            <div className='mt-2'>
              <Link to='/ideas' className='home-anchor home-anchor-sm'>
                <span className='text'>Get started</span>
              </Link>
            </div>
            <div className='mt-2'>
              <a
                href='https://blog.reactplay.io/'
                target='_blank'
                rel='noopener noreferrer'
                className='home-anchor home-anchor-sm'
              >
                <span className='text'>Read our blog posts</span>
              </a>
            </div>
          </p>
        </div>
        <div className='body-tertiary'>
          <h3 className='section-title'>Show love</h3>
          <p className='mb-2'>
            Enjoying ReactPlay? Please help us spreading the word You can share about
            ReactPlay on any of your favorite social media platforms.
          </p>
          <button
            onClick={() => setShowShareModal(!showShareModal)}
            className='home-anchor home-anchor-sm'
            href='#'
          >
            <span className='text'>Share about ReactPlay</span>
          </button>
          <p className='mt-10 mb-2'>Your support means a lot to us. Want to be our Sponsor and support us?</p>
          <a
            target='_blank'
            className='home-anchor home-anchor-sm'
            href='https://github.com/sponsors/atapas'
          >
            <span className='text'>Sponsor ReactPlay</span>
          </a>
        </div>
      </div>}
      <hr className='separater' />
      <div className="flex justify-center items-center">
        <Link to='/tech-stacks'>
          ReactPlay - The MIT License (MIT) Copyright &copy;
          {new Date().getFullYear()} . Powered by{" "}
          <a className='text-link-default'>Top Notch Tech Stacks</a>.
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
