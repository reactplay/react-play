import useContributors from 'common/hooks/useContributors';

const Contributors = () => {
  const { data, error, isLoading } = useContributors(true);
  const contributioncircle = (item) => {
    var contributionCircle;
    switch (true) {
      case item >= 80:
        contributionCircle = 'Contributior-circle-1';

        break;
      case item < 80 && item >= 50:
        contributionCircle = 'Contributior-circle-2';

        break;
      case item < 50 && item >= 30:
        contributionCircle = 'Contributior-circle-3';

        break;
      default:
        contributionCircle = 'Contributior-circle-4';
    }

    return contributionCircle;
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
                className={`contributor-anchor ${contributioncircle(contributor?.contributions)}`}
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
    </>
  );
};

export default Contributors;
