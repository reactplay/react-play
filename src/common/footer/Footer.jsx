import { Link } from 'react-router-dom';
import BackToTop from 'common/components/BackToTop';

const Footer = () => {
  return (
    <footer className="app-footer text-center">
      <hr className="separater" />
      <div className="footer-content-wrapper">
        <div className="flex justify-center items-center py-2">
          <p className="app-footer-text">
            ReactPlay - The MIT License (MIT) Copyright &copy;
            {new Date().getFullYear()} . Powered by{' '}
            <Link className="text-link-default" to="/tech-stacks">
              Top Notch Tech Stacks
            </Link>
            .
          </p>
          <div className="footer-back-to-top">
            <BackToTop isInFooter />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
