import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="app-footer text-center">
      <hr className="separater" />
      <div className="flex justify-center items-center py-2">
        <p>
          ReactPlay - The MIT License (MIT) Copyright &copy;
          {new Date().getFullYear()} . Powered by{' '}
          <Link className="text-link-default" to="/tech-stacks">
            Top Notch Tech Stacks
          </Link>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
