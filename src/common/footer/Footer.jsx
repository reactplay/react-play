import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="app-footer text-center">
      <hr className="separater" />
      <div className="flex justify-center items-center py-2">
        <p>
          ReactPlay - The MIT License (MIT) Copyright &copy;
          {new Date().getFullYear()} . Powered by{" "}
          <a href="/tech-stacks" className="text-link-default">
            Top Notch Tech Stacks
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
