import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function Navbar(props) {
  const {username, playname} = useParams()
  const [mealTypes, activeMealHandler, activeMenu] = Object.values(props);
  return (
    <div className="navbar">
      {mealTypes.map((mealtype, index) => {
        return (
          <NavLink
            key={index}
            to={`/plays/${username}/${playname}/${mealtype}`}
            className={`navbar-link ${mealtype === activeMenu ? "active" : ""}`}
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
