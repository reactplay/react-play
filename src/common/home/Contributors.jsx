import { useEffect } from 'react';
import useContributors from 'common/hooks/useContributors';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Contributors = () => {
  const { data, error, isLoading } = useContributors(true);

  useEffect(() => {
    const contributorAnimation = gsap.fromTo(
      '.list-contributors',
      { y: 150 },
      {
        y: 0,
        scrollTrigger: {
          trigger: '.list-contributors',
          scrub: 0.3,
          start: 'top bottom',
          end: 'bottom center'
        }
      }
    );

    return () => {
      contributorAnimation.kill();
    };
  }, []);

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
    </>
  );
};

export default Contributors;
