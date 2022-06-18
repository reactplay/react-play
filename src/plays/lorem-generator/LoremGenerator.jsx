import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';
import './loremGenerator.css';
import { Footer, Header, Main } from './components';

function LoremGenerator(props) {
  // Do not remove the below lines. 
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <>
            <div className="bg-slate-200 overflow-x-hidden min-h-screen scrollbar-hide">
              <Header />
              <Main />
              <Footer />
            </div>
          </>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default LoremGenerator;