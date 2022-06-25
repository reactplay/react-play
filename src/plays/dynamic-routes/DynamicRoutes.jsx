import { getPlayById } from "meta/play-meta-util";
import PlayHeader from "common/playlists/PlayHeader";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import "./dynamicRoutes.css";
import data from "./Data";
import { useEffect, useState } from "react";

function DynamicRoutes(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  let { param } = useParams(); // return the parameter of url
  const [activeMenu, setActiveMenu] = useState();
  useEffect(() => {
    //useEffect hook keep eye on url parameter whenever it changes so we can re-mount
    setActiveMenu(param ? param : "breakfast");
  }, [param]);
  const activeRecipes = data.filter((recipe) => {
    return recipe.mealtype === activeMenu; //filter reciepes based on active menu
  });
  const mealType = [];
  data.map((recipe) => {
    return mealType.push(recipe.mealtype); //push  meal categories to an array
  });

  // eliminate duplicate categories so we can render a navbar of uniq categories
  const uniqMealType = [...new Set(mealType)];

  const activeMenuHandler = (mealtype) => {
    setActiveMenu(mealtype);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="dynamic-routes-container">
            <div className="header">
              <h1 className="heading">React Dynamic Routes</h1>
              <h3 className="sub-heading">
                Click the navbar or change the url
                <small className="example"> (e.g. &nbsp; url/breakfast)</small>
              </h3>
              <Navbar //passing unique meal type to render on the navbar
                mealtype={uniqMealType}
                activeMenuHandler={activeMenuHandler}
                activeMenu={activeMenu} //a clickhandler that will reset the active menu
              />
            </div>

            <div className="recipe-container">
              {activeRecipes.length <= 0 ? <>Sorry, check the url</> : ""}
              {activeRecipes.map((recipe, index) => {
                //render the recipes based on active menu

                return (
                  <div className="recipe-card " key={index}>
                    <div>
                      <h4>{recipe.name}</h4>
                    </div>
                    <img
                      className="image"
                      src={recipe.image}
                      alt={recipe.name}
                    />
                    <div className={`symbol ${recipe.mealtype}`}>
                      {recipe.mealtype}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DynamicRoutes;
