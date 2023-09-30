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
    },
    {
      name: 'Bugfender',
      website: 'https://bugfender.com',
      logo: '/sponsors-partners/bugfender.png'
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
        Our
        <br />
        <strong>
          <span>Partners & Sponsors</span>
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
            <a
              className="partners-sponsors-cta"
              href="https://forms.gle/19KTxhzp4aiTJ4kMA"
              rel="noreferrer"
              target="_blank"
            >
              Partner an Event <FaHandshake className="handshake" size={28} />
            </a>
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
            <a
              className="partners-sponsors-cta"
              href="https://forms.gle/19KTxhzp4aiTJ4kMA"
              rel="noreferrer"
              target="_blank"
            >
              Sponsor an Event <FaHandshake className="handshake" size={28} />
            </a>
          </div>
        </div>
      </div>
      {/* NOTE: In the following two sections, there are inline styles to override the custom css classes. These are being used for the time being, until data for the sections are available. */}
      <div className="backers-container">
        <h3>Backers</h3>
        <span>
          Support us with any monthly sponsorship. Your help means a lot to us.
          <br /> We will give you a shoutout and add you here.
        </span>
        <div
          className="backers-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center'
          }}
        >
          {/* {backers.map((b) => (
            <a className="backers-grid-item" rel="noreferrer" target="_blank">
              abcd
            </a>
          ))} */}
          <a
            className="backers-cta"
            href="https://github.com/sponsors/reactplay"
            rel="noreferrer"
            target="_blank"
          >
            <RiHeartFill className="heart" size={28} />
            <RiHeartAddFill className="heart-add" size={28} />
          </a>
        </div>
      </div>
      <div className="prime-sponsors-container">
        <h3>Prime Sponsors</h3>
        <span>
          Be a prime sponsor of ReactPlay. <br />
          Your sponsorship will go a long way, and we will place you in our internal events,
          newsletters and here on the homepage.
        </span>
        <div
          className="prime-sponsors-grid"
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            alignItems: 'center'
          }}
        >
          {/* {primeSponsors.map((p) => (
            <a className="prime-sponsors-grid-item" rel="noreferrer" target="_blank">
              abcd
            </a>
          ))} */}
          <a
            className="prime-sponsors-cta"
            href="https://github.com/sponsors/reactplay"
            rel="noreferrer"
            target="_blank"
          >
            Become a Prime Sponsor <TbHeartHandshake className="heart-handshake" size={28} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Sponsors;
