import { Helmet } from 'react-helmet';
import { useUserData, useAuthenticationStatus } from '@nhost/react';
import { NHOST } from 'common/const';
import { getAllBadgesByUserId, getUserByEmail } from 'common/services/badges';
import { slug2Email } from 'common/services/string';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Badge from './Badge';
import BadgeDetails from './BadgeDetails';
import { useParams } from 'react-router-dom';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';

const BadgesDashboard = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const param = useLocation();
  const user = useUserData();
  const [allBadges, setAllBadges] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [itsMe, setItsMe] = useState(false);
  const [selectedBadge, setSelectedBadge] = useState();
  const [loadingBadges, setLoadingBadges] = useState(true);

  // Meta related
  const [metaImage, setMetaImage] = useState();
  let { email } = useParams();

  const handleLogin = () => {
    window.location = NHOST.AUTH_URL(`${window.location.origin}/contributors/me/badges`);
  };

  useEffect(() => {
    async function getData() {
      let finalEmail = undefined;
      if (email) {
        if (email === 'me') {
          if (!isAuthenticated) {
            handleLogin();
          }
          finalEmail = user?.email;
        } else {
          finalEmail = slug2Email(email);
        }
        setLoadingBadges(true);

        const ui = await getUserByEmail(finalEmail);
        console.error(ui[0]);
        setUserInfo(ui[0]);
        if (user && user.email) {
          setItsMe(email === 'me' || user.email === slug2Email(email));
        }

        const allBadges = await getAllBadgesByUserId(await ui[0]?.id);
        setAllBadges(allBadges);
        setLoadingBadges(false);
        // TODO: Bridge fix: Will be updated once meta image fix appears
        setMetaImage();
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
        <meta content={userInfo.displayName} name="description" />
        <meta content={userInfo.displayName} property="og:title" />
        <meta content={userInfo.email} property="og:description" />
        <meta content={metaImage} data-react-helmet="true" property="og:image" />
        <meta content={userInfo.email} data-react-helmet="true" property="og:image:alt" />
        <meta content={userInfo.name} data-react-helmet="true" name="twitter:title" />
        <meta content={userInfo.email} data-react-helmet="true" name="twitter:description" />
        {/* <meta
          name="twitter:image"
          content={ogTagImage}
          data-react-helmet="true"
        /> */}
      </Helmet>

      <div className="font-sans antialiased leading-normal tracking-wider bg-cover h-full p-8 bg-[#F6F6F9]">
        <div className="flex items-center h-auto  flex-wrap mx-auto my-16">
          {userInfo ? (
            <div className="w-full rounded-lg shadow-2xl bg-white mx-6" id="profile">
              <div className="p-1 md:p-12 text-center">
                <div
                  className="block border-4 border-white rounded-full mx-auto -mt-16 h-24 w-24 bg-cover bg-center md:h-32 md:w-32 md:-mt-32"
                  style={{
                    backgroundImage: `url(${userInfo.avatarUrl})`
                  }}
                />

                <h1 className="text-3xl font-bold pt-8 text-gray-900">{userInfo.displayName}</h1>
                <p className="pt-4 flex items-center justify-center text-xs text-grey-500">
                  {userInfo.email}
                </p>
                <div className="mx-auto w-4/5 pt-3 border-b-2 border-grey-100 opacity-25" />
                <div className="pt-4 pb-8">
                  <p className="pt-2 text-sm  text-gray-900">Badges</p>
                </div>
                {!loadingBadges ? (
                  <div className="mx-auto">
                    {!allBadges || !allBadges.length ? (
                      <div className="flex flex-col justify-center items-center">
                        <ImageOops className="h-32" />
                        <h3 className=" text-xl">No badges yet</h3>
                        <h4 className="text-xs text-grey-500 py-8">
                          No worry, there are many more avenues to earn a bouquet of them
                        </h4>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-4 justify-center items-center">
                        {allBadges.map((badge, bi) => {
                          return (
                            <Badge
                              badge={badge.badge_id_map}
                              key={bi}
                              selectionChanged={() => onBadgeClicked(badge.badge_id_map)}
                            />
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : null}

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
                <BadgeDetails badge={selectedBadge} onClose={() => setSelectedBadge()} />
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
