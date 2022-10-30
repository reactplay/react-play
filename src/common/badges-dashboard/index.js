import { useAuthenticated, useUserData, useUserDisplayName, useUserId } from "@nhost/react";
import { NHOST } from "common/const";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Badges from "./Badges";
import MyBadges from "./MyBadges";

const BadgesDashboard = () => {

  const [currentWindow, setCurrentWindow] = useState(0);

  const param = useLocation();
  const navigate = useNavigate();
  const loggedInUser = useUserDisplayName()?.replace(" ", "");
  const userNameFromParam = param.pathname.split("/")[1];
  const isAuthenticated = useAuthenticated();
  const user = useUserData();
  const handleLogin = () => {
    // console.log(window.location.origin)
    window.location = NHOST.AUTH_URL(`${window.location.origin}/me/badges`);
  };


  // useEffect(() => {
  //   console.log(user);
  //   navigate(`/${user.id}/badges`);
  // }, [user]);
  // if (param.pathname.includes("me")) {
  //   console.log(user);
  //   return (
  //     <Navigate to={`/${user.id}/badges`} />
  //   )
  // }


  return (

    <>
      {
        user && param.pathname.includes("me") && (
          <Navigate to={`/${user.email}/badges`} />
        )
      }
      <button onClick={() => setCurrentWindow(0)}>
        Badges
      </button>
      {
        (loggedInUser === userNameFromParam) && (
          <button onClick={() => setCurrentWindow(1)}>
            My badges
          </button>
        )
      }
      {
        (currentWindow === 0) && (
          <Badges />
        )
      }{
        (currentWindow === 1) &&
        (isAuthenticated) && (loggedInUser === userNameFromParam) &&
        (
          <MyBadges />
        )
      }
      {
        (!isAuthenticated) && (
          <button onClick={() => {
            handleLogin("github");
          }}>
            Login to view your badges
          </button>
        )
      }
      {
        (isAuthenticated) && (
          <button onClick={() => {

            navigate(`/${user.id}/badges`)
          }}>
            View my badges
          </button>
        )
      }
    </>
  );
}
export default BadgesDashboard;