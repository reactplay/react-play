/**
 * This File gives you a Re-usable Dynamic Header ( build with Compound Component pattern) Component.
 * We can use it's default export for creating Dynamic Header or we can use some default build-in header
 * which is commonly used in our app like
 * { HeaderForHomePage, HeaderForPlaysPage, HeaderWithBrowseAndNav }
 */

import { Link } from 'react-router-dom';
import './header.css';
import { SearchBox } from 'common/search/SearchBox';
import { useState } from 'react';
import HeaderNav from './HeaderNav';
import Countdown from 'react-countdown';

export { HeaderForHomePage, HeaderForPlaysPage, HeaderWithBrowseAndNav };

const Completionist = () => (
  <div className="activity-timer-banner">
    #2PlaysAMonth event has been started 🚀.{' '}
    <a
      className="event-link"
      href="https://www.stack-stream.com/case/reactplay-2playsamonth-event-launch"
      target="_blank"
    >
      See the Launch Video
    </a>
  </div>
);

// Renderer callback with condition
const activityTimerRenderer = ({ days, hours, minutes, seconds, completed }) => {
  const paddedDays = days < 10 ? `0${days}` : days;
  const paddedHours = hours < 10 ? `0${hours}` : hours;
  const paddedMins = minutes < 10 ? `0${minutes}` : minutes;
  const paddedSecs = seconds < 10 ? `0${seconds}` : seconds;

  if (completed) {
    return <Completionist />;
  } else {
    return (
      <div className="activity-timer-banner">
        #2PlaysAMonth event starts in{' '}
        <span style={{ minWidth: '72px', marginLeft: '4px' }}>
          {paddedDays}:{paddedHours}:{paddedMins}:{paddedSecs}
        </span>{' '}
        🚀.
        <a
          className="event-link"
          href="https://www.stack-stream.com/case/reactplay-2playsamonth-event-launch"
          target="_blank"
        >
          Join the Launch
        </a>
      </div>
    );
  }
};

/**
 *
 * @param {*} setHeaderStyle: true for position:block, false for position:fixed
 * @param showActivityTimer: true for the home
 * @returns
 */
function DynamicHeader({ children, setHeaderStyle = true, showActivityTimer = false }) {
  const isActivitiesOn = process.env.REACT_APP_ACTIVITIES_ON === 'true' && showActivityTimer;

  return (
    <>
      <header
        className={`app-header ${
          setHeaderStyle
            ? ''
            : `app-header-home ${isActivitiesOn ? 'app-header-home--promo' : null}`
        }`}
        data-testid="app-header"
      >
        {children}
      </header>
      {isActivitiesOn && (
        <Countdown date={new Date(1675209600000)} renderer={activityTimerRenderer} />
      )}
    </>
  );
}

function Logo() {
  return (
    <span>
      <Link className="app-logo" data-testid="app-logo" to="/">
        <span className="sr-only">React Play</span>
      </Link>
    </span>
  );
}

function Search() {
  const [reset, setReset] = useState({ search: false, filter: false });

  return (
    <div className="app-header-search">
      <SearchBox reset={reset} />
    </div>
  );
}

function Nav({ showBrowse = true }) {
  return <HeaderNav showBrowse={showBrowse} />;
}

DynamicHeader.Logo = Logo;
DynamicHeader.Search = Search;
DynamicHeader.Nav = Nav;

export default DynamicHeader;

function HeaderForHomePage() {
  return (
    <DynamicHeader showActivityTimer setHeaderStyle={false}>
      <DynamicHeader.Logo />
      <DynamicHeader.Nav />
    </DynamicHeader>
  );
}

function HeaderForPlaysPage() {
  return (
    <DynamicHeader>
      <DynamicHeader.Logo />
      <DynamicHeader.Search />
      <DynamicHeader.Nav showBrowse={false} />
    </DynamicHeader>
  );
}

function HeaderWithBrowseAndNav() {
  return (
    <DynamicHeader>
      <DynamicHeader.Logo />
      <DynamicHeader.Nav />
    </DynamicHeader>
  );
}
