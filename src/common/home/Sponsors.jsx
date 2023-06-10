import { FaHandshake } from 'react-icons/fa';

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
    </>
  );
};

export default Sponsors;
