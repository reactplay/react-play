import SideMenu from './SideMenu';
import MainContainer from './MainContainer';
import { useSelector } from 'react-redux';
import WatchPage from './WatchPage';

const Body = () => {
  let isWatchPage = useSelector((store) => store.app.isWatchPage);

  return (
    <div className="body">
      <SideMenu />
      {isWatchPage ? <WatchPage /> : <MainContainer />}
    </div>
  );
};

export default Body;
