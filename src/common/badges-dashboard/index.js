import { Helmet } from "react-helmet";
import {
  useAuthenticated,
  useUserData,
  useUserDisplayName,
  useUserId,
  useAuthenticationStatus,
} from "@nhost/react";
import { NHOST } from "common/const";
import {
  getAllBadgesByUserId,
  getBadgesByUserId,
  getUserByEmail,
} from "common/services/badges";
import { email2Slug, slug2Email } from "common/services/string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import Badges from "./Badges";
import MyBadges from "./MyBadges";
import Badge from "./Badge";
import BadgeDetails from "./BadgeDetails";
import bparticipant from "./img/p.jpg";
import bfinisher from "./img/pf.jpg";
import bwinner from "./img/pfw.jpg";
import { BadgeMap } from "./BadgeMap";
import { useParams } from "react-router-dom";

const BADGE_MAP = {
  participant: bparticipant,
  finisher: bfinisher,
  winner: bwinner,
};

const BadgesDashboard = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const param = useLocation();
  const navigate = useNavigate();
  const loggedInUserEmail = useUserData()?.email;
  const userEmailFromParam = param.pathname.split("/")[1];
  const user = useUserData();
  const [allBadges, setAllBadges] = useState([]);
  const [claimedBadges, setClaimedbadges] = useState([]);
  const [notClaimedBadges, setNotClaimedBadges] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [itsMe, setItsMe] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState();

  // Meta related
  const [metaImage, setMetaImage] = useState();
  let { email, details } = useParams();

  const handleLogin = () => {
    window.location = NHOST.AUTH_URL(
      `${window.location.origin}/contributors/me/badges`
    );
  };

  const getBadgeImage = (prev_badge, current_badge) => {
    if (!prev_badge) {
      return current_badge;
    }
    if (prev_badge === "winner" || current_badge === "winner") {
      return "winner";
    }

    if (prev_badge === "finisher" || current_badge === "finisher") {
      return "finisher";
    }

    if (prev_badge === "participant" || current_badge === "participant") {
      return "participant";
    }
    return undefined;
  };

  const setMetaInformation = (badges) => {
    let b_image = undefined;
    let b_current_img = undefined;
    badges.forEach((b) => {
      b_current_img = BadgeMap[b.badge_id_map.tag];
      b_image = getBadgeImage(b_image, b_current_img);
    });
    if (b_image) {
      setMetaImage(BADGE_MAP[b_image]);
    }
  };

  useEffect(() => {
    async function getData() {
      let finalEmail = undefined;
      if (email) {
        if (email === "me") {
          if (!isAuthenticated) {
            handleLogin();
          }
          finalEmail = user?.email;
        } else {
          finalEmail = slug2Email(email);
        }

        const ui = await getUserByEmail(finalEmail);
        console.error(ui[0]);
        setUserInfo(ui[0]);
        if (user && user.email) {
          setItsMe(email === "me" || user.email === slug2Email(email));
        }

        const allBadges = await getAllBadgesByUserId(await ui[0]?.id);
        setAllBadges(allBadges);

        // setNotClaimedBadges(allBadges.filter((b) => b.claimed === false));
        setMetaInformation(allBadges);
      }
    }
    if (!isLoading) {
      getData();
    }
  }, [isLoading, param.pathname]);

  const onBadgeClicked = (badge) => {
    setSelectedBadge(badge);
  };

  return (
    <>
      <Helmet>
        <title>ReactPlay - UserProfile</title>
        <meta name="description" content={userInfo.displayName} />
        <meta property="og:title" content={userInfo.displayName} />
        <meta property="og:description" content={userInfo.email} />
        <meta
          property="og:image"
          content={metaImage}
          data-react-helmet="true"
        />
        <meta
          property="og:image:alt"
          content={userInfo.email}
          data-react-helmet="true"
        />
        <meta
          name="twitter:title"
          content={userInfo.name}
          data-react-helmet="true"
        />
        <meta
          name="twitter:description"
          content={userInfo.email}
          data-react-helmet="true"
        />
        {/* <meta
          name="twitter:image"
          content={ogTagImage}
          data-react-helmet="true"
        /> */}
      </Helmet>

      <div className="font-sans antialiased leading-normal tracking-wider bg-cover h-full p-8 bg-[#F6F6F9]">
        <div className="flex items-center h-auto  flex-wrap mx-auto my-16">
          {userInfo ? (
            <div
              id="profile"
              className="w-full rounded-lg shadow-2xl bg-white opacity-75 mx-6"
            >
              <div className="p-1 md:p-12 text-center">
                <div
                  className="block border-4 border-white rounded-full mx-auto -mt-16 h-24 w-24 bg-cover bg-center md:h-32 md:w-32 md:-mt-32"
                  style={{
                    backgroundImage: `url(${userInfo.avatarUrl})`,
                  }}
                ></div>

                <h1 className="text-3xl font-bold pt-8 text-gray-900">
                  {userInfo.displayName}
                </h1>
                <p className="pt-4 flex items-center justify-center text-xs text-grey-500">
                  {userInfo.email}
                </p>
                <div className="mx-auto w-4/5 pt-3 border-b-2 border-grey-100 opacity-25"></div>
                <div className="pt-4 pb-8">
                  <p className="pt-2 text-sm  text-gray-900">Badges</p>
                </div>
                <div className="mx-auto">
                  <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-6">
                    {allBadges.map((badge, bi) => {
                      return (
                        <Badge
                          badge={badge.badge_id_map}
                          key={bi}
                          selectionChanged={() =>
                            onBadgeClicked(badge.badge_id_map)
                          }
                        />
                      );
                    })}
                  </div>
                </div>

                {itsMe ? null : ( // Will use this space for badge claiming later
                  <div className="pt-4 pb-4">
                    <button
                      className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => handleLogin()}
                    >
                      Take Me to My Badges
                    </button>
                  </div>
                )}
              </div>
              {selectedBadge && (
                <BadgeDetails
                  badge={selectedBadge}
                  onClose={() => setSelectedBadge()}
                />
              )}
            </div>
          ) : (
            <p>User not found</p>
          )}
        </div>
      </div>
    </>
  );
};
export default BadgesDashboard;
