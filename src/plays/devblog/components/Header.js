import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex bg-gray-800 text-white justify-between px-10 py-4 w-full">
      <Link className="logo text-3xl font-bold" to="/plays/coderamrin/devblog">
        DevBlog
      </Link>

      <nav>
        <a href="https://amrin.onrender.com/" target="_blank">
          About me
        </a>
      </nav>
    </header>
  );
};

export default Header;
