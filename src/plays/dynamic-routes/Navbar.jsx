import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

function Navbar(props) {
  const { username, playname } = useParams();
  const [activeMenu, activeMealHandler, mealTypes] = Object.values(props);

  return (
    <div className="navbar">
      {mealTypes &&
        mealTypes.map((mealtype, index) => {
          return (
            <NavLink
              className={`navbar-link ${mealtype === activeMenu ? 'active' : ''}`}
              key={index}
              to={`/plays/${username}/${playname}/${mealtype}`}
              onClick={() => activeMealHandler(mealtype)}
            >
              {mealtype}
            </NavLink>
          );
        })}
    </div>
  );
}

export default Navbar;
