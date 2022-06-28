import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoAddSharp, IoLogoRss } from 'react-icons/io5';
import { MdManageSearch } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { BsTwitter, BsGithub } from 'react-icons/bs';
import LogoLight from "images/img-logo-light.svg";

const Footer = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [showHideBits, setShowHideBits] = useState({
    showSearch: false,
    showBrowse: false,
    setHeaderStyle: true,
  });

  useEffect(() => {
    if (pathName === "/") {
      setShowHideBits((prev)=>({
        ...prev,
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: false,
      }));
    } else if (pathName === "/ideas") {
      setShowHideBits((prev) => ({
        ...prev,
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true,
      }));
    } else if (pathName === "/plays") {
      setShowHideBits((prev) => ({
        ...prev,
        showSearch: true,
        showBrowse: false,
        setHeaderStyle: true,
      }));
    }
  }, [pathName]);

  return (
    <footer 
      className={`app-footer ${
        showHideBits.setHeaderStyle ? "" : " app-footer--home"
      }`}
    >
      <div className="app-footer-body">
        <div className="body-primary">
          <h3>
            <span className="sr-only">ReactPlay</span>
            <img src={LogoLight} alt='Logo of ReactPlay'/>
          </h3>
          <p className="p-lg">An open-source project made with ❤️ by Tapas Adhikary and friends.</p>
          <p><small>Connect with us</small>
            <ul className="social-links">
              <li><a href="https://twitter.com/reactplayio" className="social-link" target="_blank" rel="noopener noreferrer"><BsTwitter className="icon" /><span className="sr-only">Twitter</span></a></li>
              <li><a href="https://github.com/reactplay/react-play" className="social-link" target="_blank" rel="noopener noreferrer"><BsGithub className="icon" /><span className="sr-only">Github</span></a></li>
              <li><a href="https://discord.gg/3XVrkdCz" className="social-link" target="_blank" rel="noopener noreferrer"><FaDiscord className="icon" /><span className="sr-only">Discord</span></a></li>
              <li><a href="https://blog.reactplay.io/" className="social-link" target="_blank" rel="noopener noreferrer"><IoLogoRss className="icon" /><span className="sr-only">BlogPost</span></a></li>
            </ul>
          </p>
          <p><small>Email us</small> <div><a href="mailto:contact@reactplay.io" target="_blank" rel="noopener noreferrer" className="text-link-default">contact@reactplay.io</a></div></p>
        </div>
        <div className="body-secondary">
          <h3 className="section-title mt-3">About</h3>
          <p className="mb-4">A ReactPlay is a ReactJS project, which helps you Learn, create and sharing with the developer community.</p>
          <div className="flex flex-wrap gap-1">
          <a
              href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mr-2"
            >
              <IoAddSharp className="icon" />
              <span className="btn-label">Create</span>
            </a>
            <Link to="/plays" className="btn-default-light">
                <MdManageSearch className="icon" />
                <span className="btn-label">Browse</span>
              </Link>
            </div>
          <p className="mt-10">Not sure how to get started? <br/>We have a lot of ideas, get started.
          <div className="mt-2">
            <Link to="/ideas" className="home-anchor home-anchor-sm">
              <span className="text">Get started</span>
            </Link>
          </div>
          <div className="mt-2">
            <a href="https://blog.reactplay.io/" target="_blank" rel="noopener noreferrer" className="home-anchor home-anchor-sm">
              <span className="text">Read our blog posts</span>
            </a>
          </div>
          </p>
        </div>
        <div className="body-tertiary">
          <h3 className="section-title">Show love</h3>
          <p className="mb-2">Share your thoughts about ReactPlay in any of your favorite social media.</p>
          <a className="home-anchor home-anchor-sm" href="#">
            <span className="text">Share about ReactPlay</span>
          </a>
          <p className="mt-10 mb-2">Some text about asking for the money.</p>
          <a className="home-anchor home-anchor-sm" href="#">
            <span className="text">Sponsor ReactPlay</span>
          </a>
        </div>
      </div>
      <hr className="separater"/>
      <p className="copy">
        ReactPlay - The MIT License (MIT) Copyright &copy;{new Date().getFullYear()} {' '}. Powered by <a 
          href="https://tapasadhikary.com" className="text-link-default"
          target="_blank" 
          rel="noopener noreferrer">top notch tech stack</a>.
      </p>
    </footer>
  );
};

export default Footer;
