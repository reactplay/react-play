import React, { useState, useContext } from 'react';
import { SearchContext } from 'common/search/search-context';
import Collasp from '../navbar/assest/img.png';
import LogoImage from '../navbar/assest/logo.png';
import ChartImg from './assest/Chart.png';
import ChatImg from './assest/Chat.png';
import UserImg from './assest/User.png';
import SettingImg from './assest/Setting.png';
import SearchImg from './assest/Search.png';
import Backgrounds from './Backgrounds';
import { FaTwitterSquare } from 'react-icons/fa';
import { BsSun, BsMoon } from 'react-icons/bs';

const NavListItems = () => {
  const [open, setOpen] = useState(true);
  const [show, setShow] = useState('opacity-0');
  const [hide, setHide] = useState(true);
  const [data, setData] = useState(Backgrounds);

  // 👇 Get theme state from context
  const { theme, toggleTheme } = useContext(SearchContext);

  const filterResult = (catItem) => {
    const result = Backgrounds.filter((currentData) => {
      handleOpacity();
      handleHide();
      return currentData.type === catItem;
    });
    setData(result);
  };

  const handleOnClick = () => setOpen((prevState) => !prevState);
  const handleOpacity = () => setShow('opacity-1');
  const handleHide = () => setHide(false);
  const reverseClick = () => {
    setShow('opacity-0');
    setHide('opacity-1');
  };

  return (
    <div className="navbar-play-contain">
      <div
        className={`${
          open ? 'w-64' : 'w-20'
        } duration-500 h-screen p-5 pt-8 bg-slate-900 dark:bg-black relative md:w-30`}
      >
        {/* Collapse Icon */}
        <img
          alt="collapse"
          className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${
            !open && 'rotate-180'
          }`}
          src={Collasp}
          onClick={handleOnClick}
        />

        {/* Logo + Title */}
        <div className="flex gap-x-4 items-center" onClick={reverseClick}>
          <img
            alt="play-logo"
            className={`cursor-pointer duration-500 ${open && 'rotate-[360deg]'}`}
            src={LogoImage}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-300 ${
              !open && 'scale-0'
            }`}
          >
            Develop
          </h1>
        </div>

        {/* Nav Items */}
        <ul className="pt-6 menu">
          <li
            className="flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-2 menu-items"
            onClick={() => filterResult('dashboard')}
          >
            <img alt="dashboard" src={ChartImg} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>Dashboard</span>
          </li>
          <li
            className="flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-2 menu-items"
            onClick={() => filterResult('ideas')}
          >
            <img alt="ideas" src={ChatImg} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>Ideas</span>
          </li>
          <li
            className="flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-2 menu-items"
            onClick={() => filterResult('join')}
          >
            <img alt="join" src={UserImg} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>Join</span>
          </li>
          <li
            className="flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-9 menu-items"
            onClick={() => filterResult('build')}
          >
            <img alt="build" src={SettingImg} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>Build</span>
          </li>
          <li
            className="flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-2 menu-items"
            onClick={() => filterResult('search')}
          >
            <img alt="search" src={SearchImg} />
            <span className={`${!open && 'hidden'} origin-left duration-200`}>Search</span>
          </li>

          {/* 🌗 Dark/Light Toggle */}
          <li
            className="flex p-2 cursor-pointer text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md mt-4 menu-items"
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <BsSun size={20} /> : <BsMoon size={20} />}
            <span className={`${!open && 'hidden'} origin-left duration-200`}>
              {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            </span>
          </li>
        </ul>
      </div>

      {/* Sidebar content */}
      <div>
        <div className={`${hide ? 'opacity-1' : 'opacity-0'} card-content`}>
          <div className="side-box-contentiner">
            <p className="side-box-contentiner-sub">
              It is a responsive NavBar that helps you to navigate
              <button id="side-box-neon">
                <span id="re">Re</span>
                <span id="a">a</span>
                <span id="c">c</span>
                <span id="t">t</span>
                <span id="pl">Pl</span>
                <span id="a2">a</span>
                <span id="y">y</span>
              </button>
              .
            </p>
            <a href="https://twitter.com/Shivamkatare_27">
              <FaTwitterSquare className="side-box-twt-icon" />
            </a>
          </div>
          <h1 className="side-animated-heading">
            <span>Made with</span>
            <div className="nav-side-message-box">
              <div className="side-box-animated-word1">CSS3</div>
              <div className="side-box-animated-word2">React JS</div>
              <div className="side-box-animated-word3">Tailwind CSS</div>
            </div>
          </h1>
        </div>

        {/* Dynamic Card Display */}
        {data.map((values) => {
          const { id, image, title, discription, statement, url } = values;

          return (
            <div
              className={`navbar-side-card ${show} ${hide ? 'invisible' : 'visible'}`}
              key={id}
            >
              <img alt="nav-card-images" className="nav-card-images" src={image} />
              <div className="nav-side-card-hover">
                <h2 className="nav-side-card-heading">{title}</h2>
                <div className="nav-side-card-description">{discription}</div>
                <a href={url}>
                  <button className="nav-card-button">{statement}</button>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NavListItems;
