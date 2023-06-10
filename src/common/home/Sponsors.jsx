import { FaHandshake } from 'react-icons/fa';

const Sponsors = () => {
  const eventSponsors = [
    {
      name: '',
      website: '',
      logo: ''
    },
    {
      name: '',
      website: '',
      logo: ''
    }
  ];
  const eventPartners = [
    {
      name: '',
      website: '',
      logo: ''
    },
    {
      name: '',
      website: '',
      logo: ''
    },
    {
      name: '',
      website: '',
      logo: ''
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
              {eventPartners.map((e) => (
                <a className="partners-sponsors-grid-item">abcd</a>
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
              {eventSponsors.map((e) => (
                <a className="partners-sponsors-grid-item">abcd</a>
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
