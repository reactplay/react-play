import { useSelector } from 'react-redux';

const SideMenu = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="side-menu-container">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
        <hr />
        <li>Library</li>
        <li>History</li>
        <hr />
        <li>
          <h6>Explore</h6>
        </li>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>Sports</li>
      </ul>
    </div>
  );
};

export default SideMenu;
