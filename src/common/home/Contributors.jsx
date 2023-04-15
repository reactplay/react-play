import useContributors from 'common/hooks/useContributors';
import { useNavigate } from 'react-router-dom';

const Contributors = () => {
  const { data, error, isLoading } = useContributors(true);
  const navigate = useNavigate(null);
  const handleSeeAllContributors = () => {
    console.log('clicked');
    navigate('/allcontributors');
  };

  return (
    <>
      <h2 className="title-primary">
        <strong>
          <span>Big Thanks</span>
        </strong>
        <br /> to All Contributors!
      </h2>
      <ul className="list-contributors">
        {isLoading && <li>Loading...</li>}
        {error && <li>Error: {error.message}</li>}
        {data &&
          data.map((contributor) => (
            <li
              className="contributor"
              data-testid={`contributor-${contributor.id}`}
              key={contributor.id}
            >
              <a
                className="contributor-anchor"
                href={contributor.html_url}
                rel="noopener noreferrer"
                target="_blank"
                title={`${contributor.login}(${contributor.contributions} contributions)`}
              >
                <img
                  alt={contributor.login}
                  className="contributor-thumb"
                  loading="lazy"
                  src={contributor.avatar_url}
                />
              </a>
            </li>
          ))}
      </ul>
      <button onClick={() => handleSeeAllContributors()}>See All</button>
    </>
  );
};

export default Contributors;
