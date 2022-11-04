import { useAuthenticated, useUserData, useUserDisplayName, useUserId } from "@nhost/react";
import { NHOST } from "common/const";
import { getAllBadgesByUserId, getBadgesByUserId, getUserByEmail } from "common/services/badges";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Badges from "./Badges";
import MyBadges from "./MyBadges";

const BadgesDashboard = () => {

  const param = useLocation();
  const navigate = useNavigate();
  const loggedInUserEmail = useUserData()?.email;
  const userEmailFromParam = param.pathname.split("/")[1];
  const isAuthenticated = useAuthenticated();
  const user = useUserData();
  const [allBadges, setAllBadges] = useState([]);
  const [claimedBadges, setClaimedbadges] = useState([]);
  const [notClaimedBadges, setNotClaimedBadges] = useState([]);

  const handleLogin = () => {
    window.location = NHOST.AUTH_URL(`${window.location.origin}/me/badges`);
  };

  useEffect(() => {
    async function getData() {
      const email = param.pathname.split("/")[1];
      const userInfo = await getUserByEmail(email);
      setAllBadges(await getAllBadgesByUserId(await userInfo[0]?.id));
      setClaimedbadges(await getBadgesByUserId(await userInfo[0]?.id, true));
      setNotClaimedBadges(await getBadgesByUserId(await userInfo[0]?.id, false))
    }
    getData();


  }, [])

  return (
    <div className=" flex flex-col">
      {
        user && param.pathname.includes("me") && (
          <Navigate to={`/${user.email}/badges`} />
        )
      }
      <div className="">
        Badges
      </div>
      {
        (isAuthenticated) && (userEmailFromParam === loggedInUserEmail) && (
          <MyBadges
            allBadges={allBadges}
            claimedBadges={claimedBadges}
            notClaimedBadges={notClaimedBadges}
          />
        )
      }{
        (userEmailFromParam !== loggedInUserEmail) &&
        <Badges
          badges={allBadges}
          isAuthenticated={isAuthenticated}
          handleLogin={handleLogin}
          handleViewBtnClick={() => navigate(`/${user.email}/badges`)}
        />
      }
    </div>
  );
}
export default BadgesDashboard;