import { FaHandshake } from 'react-icons/fa';
import { TbHeartHandshake } from 'react-icons/tb';
import { RiHeartFill, RiHeartAddFill } from 'react-icons/ri';

const Sponsors = () => {
  const eventSponsors = [
    {
      name: 'Nhost',
      website: 'https://nhost.io',
      logo: '/sponsors-partners/nhost.png'
    },
    {
      name: 'stackstream',
      website: 'https://stack-stream.com',
      logo: '/sponsors-partners/stackstream.png'
    }
  ];
  const eventPartners = [
    {
      name: 'React Nexus',
      website: 'https://reactnexus.com',
      logo: '/sponsors-partners/react-nexus.png'
    },
    {
      name: 'React Summit',
      website: 'https://reactsummit.com/',
      logo: '/sponsors-partners/react-summit.png'
    }
  ];

  const primeSponsors = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const backers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <h2 className="title-primary">
        <strong>
          <span>Our Partners & Sponsors</span>
        </strong>
      </h2>
      <div className="event-partners-sponsors-container">
        <div className="event-partners-sponsors">
          <h3>Event Partners</h3>
          <div className="content">
            <div className="partners-sponsors-grid">
              {eventPartners.map((p) => (
                <a
                  className="partners-sponsors-grid-item"
                  href={p.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt={p.name} src={p.logo} />
                </a>
              ))}
            </div>
            <button className="partners-sponsors-cta">
              Partner an Event <FaHandshake className="handshake" size={28} />
            </button>
          </div>
        </div>
        <div className="event-partners-sponsors">
          <h3>Event Sponsors</h3>
          <div className="content">
            <div className="partners-sponsors-grid">
              {eventSponsors.map((s) => (
                <a
                  className="partners-sponsors-grid-item"
                  href={s.website}
                  rel="noreferrer"
                  target="_blank"
                >
                  <img alt={s.name} src={s.logo} />
                </a>
              ))}
            </div>
            <button className="partners-sponsors-cta">
              Sponsor an Event <FaHandshake className="handshake" size={28} />
            </button>
          </div>
        </div>
      </div>
      <div className="prime-sponsors-container">
        <h3>Prime Sponsors</h3>
        <div className="prime-sponsors-grid">
          {primeSponsors.map((p) => (
            <a className="prime-sponsors-grid-item" rel="noreferrer" target="_blank">
              abcd
            </a>
          ))}
          <button className="prime-sponsors-cta">
            Become a Prime Sponsor <TbHeartHandshake className="sponsor-tier" size={28} />
          </button>
        </div>
      </div>
      <div className="backers-container">
        <h3>Backers</h3>
        <div className="backers-grid">
          {backers.map((b) => (
            <a className="backers-grid-item" rel="noreferrer" target="_blank">
              abcd
            </a>
          ))}
          <button className="backers-cta">
            <RiHeartFill className="heart" size={28} />
            <RiHeartAddFill className="heart-add" size={28} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
