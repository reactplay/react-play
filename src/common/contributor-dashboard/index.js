import { Helmet } from 'react-helmet';
import useContributors from 'common/hooks/useContributors';
import { useUserData, useAuthenticationStatus } from '@nhost/react';
import { NHOST } from 'common/const';
import { getAllBadgesByUserId, getUserByEmail } from 'common/services/badges';
import './tablist.css';
import { useEffect, useState } from 'react';
import { submit } from 'common/services/request';
import Badge from 'common/badges-dashboard/Badge';
import BadgeDetails from 'common/badges-dashboard/BadgeDetails';
import useGitHub from 'common/hooks/useGitHub';
import { useParams } from 'react-router-dom';
import ContributorPlay from './ContributorPlay';
import { FetchContributorInfoFilterByEmail } from 'common/services/request/query/fetch-contributor-info-filter-by-email';
// import { startFetchMyQuery } from 'common/services/request/query/fetch-contributor-info-filter-by-email';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';

const ContributorDashboard = () => {
  const TabList = ['Badges', 'Play', 'Contribution'];

  const params = useParams();
  const [allBadges, setAllBadges] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);
  const [loadingPlay, setLoadingPlay] = useState(true);
  const [plays, setPlays] = useState([]);
  const [paramId, setparamId] = useState();
  const [selectedBadge, setSelectedBadge] = useState();
  const [loadingBadges, setLoadingBadges] = useState(true);
  const [selectedTab, setSelectedTab] = useState(TabList[0]);

  const { data, error, isLoading } = useGitHub('Abhishek-90');
  // console.log('params: ', params);
  // console.log('userinfo: ');
  const onBadgeClicked = (badge) => {
    setSelectedBadge(badge);
  };

  const getContributorInfoByEmail = async () => {
    setLoadingUserInfo(true);
    setLoadingPlay(true);
    try {
      // console.log('Hi');
      const result = await submit(FetchContributorInfoFilterByEmail('holaniabhishek90@gmail.com'));
      // console.log(result);
      // const result = await startFetchMyQuery();
      // console.log(result);
      if (result) {
        setLoadingUserInfo(false);
        setUserInfo(result[0]);

        // console.log(result.meta_user_profile[0]);
        // console.log('plays: ', result[0].plays);
        getBadgesInfo(result[0].id);
        setPlays(result[0].plays);
        setLoadingPlay(false);
      }
    } catch (e) {
      // console.log('error: ', e);
      return [];
    }
  };

  const getBadgesInfo = async (id) => {
    setLoadingBadges(true);
    const allBadgesResult = await getAllBadgesByUserId(id);
    if (allBadgesResult) {
      // console.log(allBadgesResult);
      setAllBadges(allBadgesResult);
      setLoadingBadges(false);
    }
  };

  // getContributorInfoByEmail();

  useEffect(() => {
    getContributorInfoByEmail();
  }, []);

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Helmet>
        <title>ReactPlay - UserProfile</title>
        <meta content={data && data.name} name="description" />
        <meta content={data && data.name} property="og:title" />
        {/* <meta content={'userInfo.email'} property="og:description" /> */}
        <meta content={data && data.avatarUrl} data-react-helmet="true" property="og:image" />
        {/* <meta content={'userInfo.email'} data-react-helmet="true" property="og:image:alt" /> */}
        <meta content={data && data.name} data-react-helmet="true" name="twitter:title" />
        {/* <meta content={'userInfo.email'} data-react-helmet="true" name="twitter:description" /> */}
        {/* <meta
          name="twitter:image"
          content={ogTagImage}
          data-react-helmet="true"
        /> */}
      </Helmet>

      <div className="font-sans antialiased leading-normal tracking-wider bg-cover h-full p-8 bg-[#F6F6F9]">
        <div className="flex items-center h-auto  flex-wrap mx-auto my-16">
          {data ? (
            <div className="w-full rounded-lg shadow-2xl bg-white mx-6" id="profile">
              <div className="p-1 md:p-12 text-center">
                <div
                  className="block border-4 border-white rounded-full mx-auto -mt-16 h-24 w-24 bg-cover bg-center md:h-32 md:w-32 md:-mt-32"
                  style={{
                    backgroundImage: `url(${data.avatar_url})`
                  }}
                />
                <h1 className="text-3xl font-bold pt-8 text-gray-900">{data.name}</h1>
                {/* <p className="pt-2 text-sm  text-gray-900">
                  {userInfo.users_user_profile_map && userInfo.users_user_profile_map.email}
                </p> */}
                <p className="pt-2 text-sm  text-gray-900">
                  {userInfo.users_user_profile_map &&
                    userInfo.users_user_profile_map.plays[0].github}
                </p>
                <p className="pt-2 text-sm  text-gray-900">{data.followers} Followers</p>{' '}
                <p className="pt-2 text-sm  text-gray-900">{data.following} Followings</p>
                <p className="pt-2 text-sm  text-gray-900">{data.bio} </p>
                <p className="pt-2 text-sm  text-gray-900">{data.company}</p>
                <div className="mx-auto w-4/5 pt-3 border-b-2 border-grey-100 opacity-25" />
                <ul className="list-tab">
                  {TabList.map((tab, index) => (
                    <div className="pt-4 pb-8">
                      <p
                        className="pt-2 text-sm  text-gray-900"
                        onClick={() => handleTabSelect(tab)}
                      >
                        {tab} (
                        {tab === TabList[0]
                          ? allBadges.length
                          : tab === TabList[1]
                          ? plays.length
                          : ''}
                        )
                      </p>
                    </div>
                  ))}
                </ul>
                {!loadingBadges && selectedTab === TabList[0] ? (
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
                {!loadingPlay && selectedTab === TabList[1] && (
                  <div>
                    {' '}
                    <section>
                      <ul className="list-plays">
                        {plays.map((play, index) => (
                          <ContributorPlay key={index} play={play} />
                        ))}
                      </ul>
                    </section>
                  </div>
                )}
                {selectedTab === TabList[2] && (
                  <div className="pt-4 pb-8">
                    <p className="pt-2 text-sm  text-gray-900">Contribution</p>
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
    </div>
  );
};

export default ContributorDashboard;
