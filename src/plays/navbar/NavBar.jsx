import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';
import './navBar.css';
import Menus from "./Navbar-image"
import { useState } from 'react';

function NavBar(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className='flex'>

            <div className={`${open ? 'w-72' : 'w-20'} 
            duration-500 h-screen p-5 pt-8 bg-slate-900 relative`}>

              <img src={require('../navbar/assest/img.png')}
                alt=''
                className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 bg-cyan-500 ${!open && "rotate-180"}`}
                onClick={() => setOpen(!open)} />

              <div className='flex gap-x-4 items-center'>
                <img src={require('../navbar/assest/logo.png')}
                  alt=''
                  className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`} />

                <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>Develop</h1>

              </div>
              {/* Menu */}
              <ul className="pt-6">
                {Menus.map((Menu, index) => (
                  <li
                    key={index}
                    className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 hover:bg-gray-50 hover:text-slate-900 rounded-md
                       ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                      } `}
                  >
                    <img src={Menu.url} alt="" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>
                      {Menu.title}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}
export default NavBar;
