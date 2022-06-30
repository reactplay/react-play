import React, { useState } from 'react'
import Collasp from '../navbar/assest/img.png'
import LogoImage from '../navbar/assest/logo.png'
import ChartImg from "./assest/Chart.png"
import ChatImg from "./assest/Chat.png"
import UserImg from "./assest/User.png"
import SettingImg from "./assest/Setting.png"
import SearchImg from "./assest/Search.png"
import Backgrounds from './Backgrounds'

const NavListItems = (props) => {
    const [open, setOpen] = useState(true);
    const [show, setShow] = useState("opacity-0");
    const [data, setData] = useState(Backgrounds);

    const filterResult = (catItem) => {
        const result = Backgrounds.filter((currentData) => {
            handleOpacity();
            return currentData.type === catItem;
        });
        setData(result)
    }
    const handleOnClick = () => setOpen((prevState) => !prevState)
    const handleOpacity = () => {
        setShow("opacity-1")
    }
    return (
        <>
            {/* Code Starts Here */}
            <div className='contain'>
                <div className={`${open ? 'w-64' : 'w-20'} duration-500 h-screen p-5 pt-8 bg-slate-900 relative md:w-30`}>
                    <img src={Collasp}
                        alt='collasp'
                        className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${!open && "rotate-180"}`}
                        onClick={handleOnClick} />
                    <div className='flex gap-x-4 items-center'>
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
                    {data.map((values) => {
                        const { id, image, title, discription, statement, url } = values
                        return (
                            <>
                                <div className={`card ${show}`} key={id}>
                                    <img src={image} alt={"card-images"} className={`images`} />
                                    <div className='hover'>
                                        <h2 className='heading'>{title}</h2>
                                        <div className='text1'>{discription}</div>
                                        <a href={url}> <button className='button'>{statement}</button></a>
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
