import { Link } from "react-router-dom";

const Footer = () => {  return (
    <footer className='app-footer text-center'>
      <hr className='separater' />
      <div className='flex justify-center items-center py-2'>
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
