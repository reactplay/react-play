import React, { useState } from 'react'
import Collasp from '../navbar/assest/img.png'
import LogoImage from '../navbar/assest/logo.png'
import ChartImg from "./assest/Chart.png"
import ChatImg from "./assest/Chat.png"
import UserImg from "./assest/User.png"
import SettingImg from "./assest/Setting.png"
import SearchImg from "./assest/Search.png"
import Backgrounds from './Backgrounds'
import { FaTwitterSquare } from 'react-icons/fa';

const NavListItems = (props) => {
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState("opacity-0");
    const [hide, setHide] = useState(true);  //true == opacity-1
    const [data, setData] = useState(Backgrounds);

    const filterResult = (catItem) => {
        const result = Backgrounds.filter((currentData) => {
            handleOpacity();
            handleHide();
            return currentData.type === catItem;
        });
        setData(result)
    }
    const handleOnClick = () => setOpen((prevState) => !prevState)
    const handleOpacity = () => {
        setShow("opacity-1")
    }
    const handleHide = () => {
        setHide(false)
    }

    const reverseClick = () => {
        setShow("opacity-0");
        setHide("opacity-1");
    }
    return (
        <>
            {/* Code Starts Here */}
            <div className='navbar-play-contain'>
                <div className={`${open ? 'w-64' : 'w-20'} duration-500 h-screen p-5 pt-8 bg-slate-900 relative md:w-30`}>
                    <img src={Collasp}
                        alt='collasp'
                        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${!open && "rotate-180"}`}
                        onClick={handleOnClick} />
                    <div className='flex gap-x-4 items-center' onClick={reverseClick}>
                        <img src={LogoImage}
                            alt='play-logo'
                            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
                        />
                        <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Develop</h1>
                    </div>

                    {/* ListItems */}
                    <ul className="pt-6 menu">
                        {/* Item1 */}
                        <li
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
mt-2 menu-items`} onClick={() => filterResult('dashboard')}>
                            <img src={ChartImg} alt="dashboard" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Dashboard
                            </span>
                        </li>
                        {/* Item2 */}
                        <li
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
 mt-2 menu-items`} onClick={() => filterResult('ideas')} >
                            <img src={ChatImg} alt="ideas" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Ideas
                            </span>
                        </li>
                        {/* Item3 */}
                        <li
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
 mt-2 menu-items`} onClick={() => filterResult('join')} >
                            <img src={UserImg} alt="join" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Join
                            </span>
                        </li>
                        {/* Item4 */}
                        <li
                            className={`flex rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
  mt-9 menu-items`} onClick={() => filterResult('build')} >
                            <img src={SettingImg} alt="build" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Build
                            </span>
                        </li>
                        {/* Item5 */}
                        <li
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
mt-2  menu-items`} onClick={() => filterResult('search')} >
                            <img src={SearchImg} alt="search" />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                Search
                            </span>
                        </li>
                    </ul>
                </div>
                <div>
                    {/* Fetching Values */}
                    <div className={`${hide ? "opacity-1" : "opacity-0"} card-content`}>
                        <div class="side-box-contentiner">
                            <p class="side-box-contentiner-sub">It is a responsive NavBar that helps you to navigate
                                <button id='side-box-neon'>
                                    <span id="re">Re</span>
                                    <span id="a">a</span>
                                    <span id="c">c</span>
                                    <span id="t">t</span>
                                    <span id="pl">Pl</span>
                                    <span id="a2">a</span>
                                    <span id="y">y</span>
                                </button>
                                .</p>
                            <a href='https://twitter.com/Shivamkatare_27'><FaTwitterSquare className='side-box-twt-icon' /></a>
                        </div>
                        <h1 className='side-animated-heading'>
                            <span>Made with</span>
                            <div class="nav-side-message-box">
                                <div class="side-box-animated-word1">CSS3</div>
                                <div class="side-box-animated-word2">React JS</div>
                                <div class="side-box-animated-word3">Tailwind CSS</div>
                            </div>
                        </h1>
                    </div>
                    {data.map((values) => {
                        const { id, image, title, discription, statement, url } = values
                        return (
                            <>
                                <div className={`navbar-side-card ${show} ${hide ? "invisible" : "visible"}`} key={id}>
                                    <img src={image} alt={"nav-card-images"} className={`nav-card-images`} />
                                    <div className='nav-side-card-hover'>
                                        <h2 className='nav-side-card-heading'>{title}</h2>
                                        <div className='nav-side-card-description'>{discription}</div>
                                        <a href={url}> <button className='nav-card-button'>{statement}</button></a>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default NavListItems;
