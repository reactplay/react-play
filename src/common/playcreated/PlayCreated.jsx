import { submit } from "common/services/request";
import { FetchPlaysByID } from "common/services/request/query/fetch-plays";
import { toKebabCase } from "common/services/string";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./play-created.scss";

const PlayCreated = () => {
  const { playid } = useParams();
  const [play, setPlay] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    submit(FetchPlaysByID(playid))
      .then((res) => {
        setPlay(res[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [playid]);

  if (loading) {
    return <div></div>;
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center create-plays-wrapper">
      <div>
        <span className="title-primary">
          <strong>{play.name}</strong> Created
        </span>
      </div>
      <div className="w-full max-w-6xl flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
        <div>Congratulations! Your play has been created</div>
        <div>
          <ol className="ordered-list">
            <li className="ordered-nav--link">
              Fork{" "}
              <a
                className="play-create-anchor"
                href="https://github.com/reactplay/react-play"
                target="_blank"
                rel="noopener noreferrer"
              >
                reactplay
              </a>{" "}
              repository
            </li>
            <li>Open command line console of your choice</li>
            <li>
              Run following command on your{" "}
              <a
                className="play-create-anchor"
                href="https://github.com/reactplay/react-play"
                target="_blank"
                rel="noopener noreferrer"
              >
                reactplay
              </a>{" "}
              project folder
              <code className="console-wrapper">
                npx create-react-play -c {play.id}
              </code>
            </li>
            <li>
              Install dependencies
              <code className="console-wrapper">
                npm install <br /># OR <br /> yarn{" "}
              </code>
            </li>
            <li>
              Start application
              <code className="console-wrapper">
                npm start <br /># OR <br /> yarn start
              </code>
            </li>
            <li>
              Find your play under{" "}
              <code className="console-wrapper">
                &lt;reactplay-directory&gt;/src/plays/{toKebabCase(play.name)}
              </code>
            </li>
          </ol>
          <div>
            Refer{" "}
            <a
              className="play-create-anchor"
              href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              play creation guide
            </a>{" "}
            for more information
          </div>
          <div>Happy coding!!</div>
        </div>
      </div>
    </div>
  );
};

export default PlayCreated;
