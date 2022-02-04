import { useSearchFilter } from "common/search/hooks/useSearchFilter";
import { Link } from "react-router-dom";

const PlayList = () => {
  const plays = useSearchFilter();

  return (
    <ul>
      {plays.map((play, index) => (
        <li key={play.id}>
          <Link to={play.path}>{play.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PlayList;
