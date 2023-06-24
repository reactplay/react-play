import { useState } from 'react';
import { quotes as Quotes } from './data';
import Header from './components/header';
import './motivate_me_style.css';
import Container from './container';
import PlayHeader from 'common/playlists/PlayHeader';

function GetMotivated(props) {
  const [author, setAuthor] = useState('');

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="motivate-me-main">
        <Header />
        <Container
          Quotes={Quotes}
          author={author}
          handleAuthorChange={(value) => setAuthor(value)}
        />
      </div>
    </div>
  );
}

export default GetMotivated;
