import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        This is the home page.
      </p>
      <p>
        See all the <Link to="/plays">plays</Link>
      </p>
    </div>
  );
};

export default Home;