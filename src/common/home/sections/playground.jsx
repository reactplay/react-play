import { Link } from "react-router-dom";
import FeaturedPlays from "common/playlists/FeaturedPlays";
import './playground.css';

export default function SectionPlayground() {
  return (
    <section className="home-plays">
      <FeaturedPlays />
      <div className="home-plays-footer">
        <Link to="/plays" className="home-anchor">
          <span className="text">View all Plays</span>
        </Link>
      </div>
    </section>
  );
}
