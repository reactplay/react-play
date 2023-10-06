import { Link } from 'react-router-dom';
import { IoAddSharp, IoLogoRss } from 'react-icons/io5';
import { MdManageSearch } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import LogoLight from 'images/img-logo-light.svg';
import { useSearchContext } from 'common/search/search-context';
import { CREATE_PLAY_DOC_LINK } from 'constants';

const ExtendedFooter = () => {
  const { showShareModal, setShowShareModal } = useSearchContext();
  const navLinks = [
    {
      name: 'Twitter',
      url: 'https://twitter.com/reactplayio',
      icon: <FaXTwitter className="icon" />,
      title: 'Twitter page'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/reactplay',
      icon: <BsGithub className="icon" />,
      title: 'GitHub page'
    },
    {
      name: 'Discord',
      url: 'https://discord.gg/vrTxWUP8Am',
      icon: <FaDiscord className="icon" />,
      title: 'Discord Channel'
    },
    {
      name: 'Discord',
      url: 'https://blog.reactplay.io/',
      icon: <IoLogoRss className="icon" />,
      title: 'Blog Page'
    }
  ];

  return (
    <div className="app-footer--home app-footer">
      <div className="app-footer-body">
        <div className="body-primary">
          <h3>
            <span className="sr-only">ReactPlay</span>
            <img alt="Logo of ReactPlay" src={LogoLight} />
          </h3>
          <p className="p-lg">An open-source project made with ❤️ by team ReactPlay.</p>
          <div>
            <p>
              <small>Connect with us</small>
            </p>
            <ul className="social-links">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    className="social-link"
                    href={link.url}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={link.title}
                  >
                    {link.icon}
                    <span className="sr-only">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p>
              <small>Email us</small>
            </p>{' '}
            <div>
              <p>
                <a
                  className="text-link-default"
                  href="mailto:contact@reactplay.io"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  contact@reactplay.io
                </a>
              </p>
            </div>
          </div>
          <p className="mt-8 mb-4">
            <a className="inline-block" href="https://www.netlify.com">
              {' '}
              <img
                alt="Deploys by Netlify"
                src="https://www.netlify.com/v3/img/global/badges/netlify-color-accent.svg"
              />{' '}
            </a>
          </p>
        </div>
        <div className="body-secondary">
          <h3 className="section-title mt-3">About</h3>
          <p className="mb-4">
            ReactPlay is an opensource platform that helps you learn, create and share ReactJS
            projects with the developer community.
          </p>
          <div className="flex flex-wrap gap-1">
            <a
              className="btn-primary mr-2"
              href={CREATE_PLAY_DOC_LINK}
              rel="noopener noreferrer"
              target="_blank"
            >
              <IoAddSharp className="icon" />
              <span className="btn-label">Create</span>
            </a>
            <Link className="btn-default-light" to="/plays">
              <MdManageSearch className="icon" />
              <span className="btn-label">Browse</span>
            </Link>
          </div>
          <div className="mt-10">
            <p>
              Not sure how to get started? <br />
              We have a lot of ideas for you to get started.
            </p>
            <div className="mt-2">
              <p>
                <a
                  className="home-anchor home-anchor-sm"
                  href="https://docs.reactplay.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text">Get started</span>
                </a>
              </p>
            </div>
            <div className="mt-2">
              <p>
                <a
                  className="home-anchor home-anchor-sm"
                  href="https://blog.reactplay.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text">Read our blog posts</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="body-tertiary">
          <h3 className="section-title">Show love</h3>
          <p className="mb-2">
            Enjoying ReactPlay? Please help us spreading the word You can share about ReactPlay on
            any of your favorite social media platforms.
          </p>
          <button
            className="home-anchor home-anchor-sm"
            href="#"
            onClick={() => setShowShareModal(!showShareModal)}
          >
            <span className="text">Share about ReactPlay</span>
          </button>
          <p className="mt-10 mb-2">
            Your support means a lot to us. Want to be our Sponsor and support us?
          </p>
          <a
            className="home-anchor home-anchor-sm"
            href="https://github.com/sponsors/reactplay"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="text">Sponsor ReactPlay</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExtendedFooter;
