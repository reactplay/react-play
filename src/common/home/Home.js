import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>
      <div className="video">
        <div className="video-wrapper">
          <iframe className="video-iframe" width="560" height="315" src="https://www.youtube.com/embed/D_cUdRtPG-M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <nav>
        <ul className="pills-category">
          <li>
            <Link to="/plays" className="active">Popular</Link>
          </li>
          <li><Link to="/plays">Bubble Sort</Link></li>
          <li><Link to="/plays">Arrays</Link></li>
          <li><Link to="/plays">Linked List</Link></li>
        </ul>
      </nav>
      <ul className="list-apps">
        <li>
          <a>
            <figure>
              <img src="https://www.planetware.com/wpimages/2020/04/iceland-best-waterfalls-seljalandsfoss.jpg" />
            </figure>
            <div className="list-app__title">Movile List App</div>
          </a>
        </li>
        <li>
          <a>
            <figure>
              <img src="https://www.planetware.com/wpimages/2020/04/iceland-best-waterfalls-seljalandsfoss.jpg" />
            </figure>
            <div className="list-app__title">Ultimate Countown</div>
          </a>
        </li>
        <li>
          <a>
            <figure>
              <img src="https://www.planetware.com/wpimages/2020/04/iceland-best-waterfalls-seljalandsfoss.jpg" />
            </figure>
            <div className="list-app__title">Simplistic Timer</div>
          </a>
        </li>
        <li>
          <a>
            <figure>
              <img src="https://www.planetware.com/wpimages/2020/04/iceland-best-waterfalls-seljalandsfoss.jpg" />
            </figure>
            <div className="list-app__title">The Super Search</div>
          </a>
        </li>
      </ul>
      <p className="home-footer">
        See all the <Link to="/plays">plays</Link>
      </p>
    </div>
  );
};

export default Home;