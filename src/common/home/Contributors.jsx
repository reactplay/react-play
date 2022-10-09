import useContributors from "common/hooks/useContributors";

const Contributors = () => {
  const { data, error, isLoading } = useContributors(true);

  return (
    <>
      <h3 className="title-primary">
        <strong>
          <span>Big Thanks</span>
        </strong>
        <br /> to All Contributors!
      </h3>
      <ul className="list-contributors">
        {isLoading && <li>Loading...</li>}
        {error && <li>Error: {error.message}</li>}
        {data &&
          data.map((contributor) => (
            <li key={contributor.id} className="contributor" data-testid={`contributor-${contributor.id}`}>
              <a
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="contributor-anchor"
                title={`${contributor.login}(${contributor.contributions} contributions)`}
              >
                <img
                  loading="lazy"
                  src={contributor.avatar_url}
                  alt={contributor.login}
                  className="contributor-thumb"
                />
              </a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Contributors;
