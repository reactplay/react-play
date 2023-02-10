import useContributors from 'common/hooks/useContributors';

const Contributors = () => {
  const { data, error, isLoading } = useContributors(true);
  const contributioncircle = (item) => {
    var contributionCircle;
    switch (true) {
      case item >= 80:
        contributionCircle = { height: '150px', width: '150px' };

        break;
      case item < 80 && item >= 50:
        contributionCircle = { height: '130px', width: '130px' };

        break;
      case item < 50 && item >= 30:
        contributionCircle = { height: '100px', width: '100px' };

        break;
      default:
        contributionCircle = { height: '50px', width: '50px' };
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
              {/* {console.log('contributioncircle', contributioncircle(contributor?.contributions))} */}
              <a
                className="contributor-anchor"
                href={contributor.html_url}
                rel="noopener noreferrer"
                // style={{height: '50px', width: '50px'}}
                style={contributioncircle(contributor?.contributions)}
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
