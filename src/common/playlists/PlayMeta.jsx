import { cloneElement, useEffect } from "react";
import { Helmet } from "react-helmet";

function PlayMeta({ id, name, description, path, cover, component }) {
  const playFolder = path.split("/")[2];
  const metaImage =
    cover ||
    `https://www.reactplay.io/${require(`../../plays/${playFolder}/cover.png`)}`;

  useEffect(() => {
    console.log("Play Meta in action!");
    console.log(metaImage);
  }, [name, metaImage]);

  // cloneElement(play.component(), { id: play.id });

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={metaImage}
          data-react-helmet="true"
        />
        <meta
          property="og:image:alt"
          content={description}
          data-react-helmet="true"
        />
        <meta name="twitter:title" content={name} data-react-helmet="true" />
        <meta
          name="twitter:description"
          content={description}
          data-react-helmet="true"
        />
        <meta
          name="twitter:image"
          content={metaImage}
          data-react-helmet="true"
        />
      </Helmet>
      {cloneElement(component(), { id })}
    </>
  );
}

export default PlayMeta;
