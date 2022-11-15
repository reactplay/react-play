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

  const handleLogin = () => {
    window.location = NHOST.AUTH_URL(`${window.location.origin}/me/badges`);
  };

  useEffect(() => {
    async function getData() {
      const email = param.pathname.split("/")[1];
      if ((email && email === "me") || user) {
        const reader = new FileReader();
        reader.readAsDataURL(
          "https://icon2.cleanpng.com/20171221/rhw/red-seal-badge-transparent-png-clip-art-5a3c12a9420ac4.1498310515138863772705.jpg"
        );
        reader.onload = () => {
          setMetaImage(reader.result);
        };
        if (!isAuthenticated && email === "me") {
          handleLogin();
        }
        const ui = await getUserByEmail(
          email === "me" ? user.email : slug2Email(email)
        );
        console.error(ui[0]);
        setUserInfo(ui[0]);
        if (user && user.email) {
          setItsMe(email === "me" || user.email === slug2Email(email));
        }

        console.error(email2Slug(user.email) === email);
        const allBadges = await getAllBadgesByUserId(await ui[0]?.id);
        console.error(allBadges);
        setAllBadges(allBadges.filter((b) => b.claimed === true));
        setNotClaimedBadges(allBadges.filter((b) => b.claimed === false));
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

      <div
        className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover text-gray-100 h-full p-8"
        style={{
          background: "linear-gradient(180deg,#010426,#4c5b5e)",
        }}
      >
        <div className="flex items-center h-auto  flex-wrap mx-auto my-32">
          {userInfo ? (
            <div
              id="profile"
              className="w-full rounded-lg shadow-2xl bg-white opacity-75 mx-6 bg-gray-900"
            >
              <div className="p-4 md:p-12 text-center">
                <div
                  className="block  rounded-full shadow-xl mx-auto -mt-16 h-16 w-16 bg-cover bg-center md:h-32 md:w-32 md:-mt-32"
                  style={{
                    backgroundImage: `url(${userInfo.avatarUrl})`,
                  }}
                ></div>

                <h1 className="text-3xl font-bold pt-8 text-gray-100">
                  {userInfo.displayName}
                </h1>
                <p className="pt-4 flex items-center justify-center text-xs text-grey-600  text-gray-100">
                  {userInfo.email}
                </p>
                <div className="mx-auto w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
                <div className="pt-4 pb-8">
                  <p className="pt-2 text-sm  text-gray-100">Badges</p>
                </div>
                <div className="mx-auto">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
