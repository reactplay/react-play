import * as React from "react";
import { getPlayById } from "meta/play-meta-util";
import Input from "./Input";
import { ButtonSubmit } from "./styles";

import PlayHeader from "common/playlists/PlayHeader";

function GitHubFinder(props: any) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.
  const [username, setUsername] = React.useState("");

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <h1>GitHub Finder</h1>
            <p>Your site to find programmers quickly and easily!</p>
          </div>
          <iframe
            title="review"
            src="https://github-finder-programming-school.vercel.app/"
            width="100%"
            height="900px"
            style={{ border: 'none' }}
          ></iframe>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default GitHubFinder;
