import { Link } from 'react-router-dom';
import './home.css';
import { RiSlideshow4Line } from "react-icons/ri";
import { BiShareAlt, BiAddToQueue } from "react-icons/bi";
import { ReactComponent as Flower } from 'images/icon-flower.svg';

const Home = () => {
  return (
    <div>
      <section className="app-home-body">
        <div className="home-bg-graphics">
          <Flower className="home-bg-graphics-sm" />
          <Flower className="home-bg-graphics-rg" />
          <Flower className="home-bg-graphics-lg" />  
        </div>
        <h2 className="body-title">Start <strong>React Code</strong> Arena <br/>with ReactPlay</h2>
        <p className="body-desc">Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat </p>
        <div className="video">
          <div className="video-wrapper">
            <iframe className="video-iframe" width="560" height="315" src="https://www.youtube.com/embed/D_cUdRtPG-M" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
          </div>
        </div>
        <ul className="home-features">
          <li className="home-features-item">
            <div className="item-icon">
              <RiSlideshow4Line className="icon" color='var(--color-neutral-90)' />
            </div>
            <h3 className="item-title">Learn </h3>
            <p className="item-desc">In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiAddToQueue className="icon" color='var(--color-neutral-90)' />
            </div>
            <h3 className="item-title">Create </h3>
            <p className="item-desc">In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus </p>
          </li>
          <li className="home-features-item">
            <div className="item-icon">
              <BiShareAlt className="icon" color='var(--color-neutral-90)' />
            </div>
            <h3 className="item-title">Socialize </h3>
            <p className="item-desc">In at iaculis lorem. Praesent tempor dictum tellus ut molestie. Sed sed ullamcorper lorem, id faucibus odio. Duis eu nisl ut ligula cursus </p>
          </li>
        </ul>
      </section>
      <section className="home-plays">
        <h3 className="plays-title-primary">Trending <strong>Plays</strong></h3>
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
            <Link to="/plays">
              <img src="https://m.media-amazon.com/images/I/51fkB0mrDuL._SX679_.jpg" alt="Thumbnail of Play Name" />
              <div className="list-app__title">Movile List App</div>
              <div className="list-app__play">Start Playing</div>
            </Link>
          </li>
          <li>
            <Link to="/plays">
              <div className="list-app__title">Ultimate Countown</div>
              <div className="list-app__play">Start Playing</div>
            </Link>
          </li>
          <li>
            <Link to="/plays">
              <div className="list-app__title">Simplistic Timer</div>
              <div className="list-app__play">Start Playing</div>
            </Link>
          </li>
          <li>
            <Link to="/plays">
              <div className="list-app__title">The Super Search</div>
              <div className="list-app__play">Start Playing</div>
            </Link>
          </li>
        </ul>
        <div className="home-plays-footer">
          <Link to="/plays" className="home-anchor"><span className="text">View all ReactPlays</span></Link>
        </div>
      </section>
    </div>
  );
};

export default Home;