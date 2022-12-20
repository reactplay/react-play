import PlayHeader from 'common/playlists/PlayHeader';
import Card from './Card';
import './FlipCardEffect.css';

function FlipCardEffect(props) {
  // Your Code Start below.
  const quotes = [
    'Spread love everywhere you go.',
    'if you love someone give them infinite space.',
    'The happiest people are the givers not the takers.',
    'The journey of a thousand miles begins with one step.'
  ];

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="flip-card">
            <h1 className="heading">Flip Card Effect</h1>
            <h3 className="sub-heading">Click any card to flip</h3>
            <div className="container">
              {quotes.map((item, index) => {
                return <Card item={item} key={index} />;
              })}
            </div>
            <p className="sub-heading">
              Inspired by{' '}
              <strong>
                <a
                  className="external-link"
                  href="https://aaronccwong.github.io/react-card-flip/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  react-card-flip
                </a>
              </strong>
              library
            </p>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default FlipCardEffect;
