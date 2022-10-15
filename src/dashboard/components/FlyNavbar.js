import { Drawer } from "@mui/material";
import { useState, useEffect } from "react";
import NavBarCommonComponent from "./NavBarCommonComponent";

const FlyNavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [flyBarOnScreen, setFlyBarOnScreen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWidth(window.innerWidth);
      setFlyBarOnScreen(false);
    }


    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [])

  return (
    <div className="flyBar ">
      {
        !flyBarOnScreen && (
          <button
            className="flyerBtn"
            onClick={() => setFlyBarOnScreen(true)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>

          </button>
        )
      }

      {
        width < 768 && (
          <Drawer
            anchor="left"
            open={flyBarOnScreen}
            onClose={() => setFlyBarOnScreen(false)}
          >
            <NavBarCommonComponent
              handleLinkClick={
                () => setFlyBarOnScreen(false)
              }
            />
          </Drawer>
        )
      }


    </div>
  );
}
export default FlyNavBar;