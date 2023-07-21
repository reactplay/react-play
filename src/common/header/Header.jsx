import HeaderNav from './HeaderNav';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Countdown from 'react-countdown';
import './header.css';
import { SearchBox } from 'common/search/SearchBox';

const Header = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const [reset, setReset] = useState({ search: false, filter: false });

  useEffect(() => {
    if (location.state) {
      setReset({ ...location.state });
    }
  }, [location.state]);

  const [showHideBits, setShowHideBits] = useState({
    showSearch: false,
    showBrowse: false,
    setHeaderStyle: true,
    showActivityTimer: false
  });

  useEffect(() => {
    if (pathName !== '/plays') {
      setReset({ search: false, filter: false });
    }
    if (pathName === '/') {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: false,
        showActivityTimer: true
      });
    } else if (pathName === '/ideas' || pathName === '/tech-stacks') {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true
      });
    } else if (pathName.startsWith('/plays')) {
      setShowHideBits({
        showSearch: true,
        showBrowse: false,
        setHeaderStyle: true
      });
    } else if (pathName.startsWith('/leaderboard')) {
      setShowHideBits({
        showSearch: false,
        showBrowse: true,
        setHeaderStyle: true
      });
    }
  }, [pathName]);

  const Completionist = () => (
    <div className="activity-timer-banner">
      Hack-R-Play 2.0 registration has been started 🚀.{' '}
      <a className="event-link" href="https://www.youtube.com/watch?v=ZBNCsvOrRPY" target="_blank">
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

  return (
    <>
      <header
        className={`app-header ${
          showHideBits.setHeaderStyle
            ? ''
            : ` app-header-home ${
                process.env.REACT_APP_ACTIVITIES_ON === 'true' && showHideBits.showActivityTimer
                  ? 'app-header-home--promo'
                  : null
              } `
        }`}
        data-testid="app-header"
      >
        <span>
          <Link className="app-logo" data-testid="app-logo" to="/">
            <span className="sr-only">React Play</span>
          </Link>
        </span>
        <div className="app-header-search">
          {showHideBits.showSearch && <SearchBox reset={reset} />}
        </div>
        <HeaderNav showBrowse={showHideBits.showBrowse} />
      </header>
      {process.env.REACT_APP_ACTIVITIES_ON === 'true' && showHideBits.showActivityTimer && (
        <Countdown date={new Date(1675209600000)} renderer={activityTimerRenderer} />
      )}
    </>
  );
};

export default Header;
