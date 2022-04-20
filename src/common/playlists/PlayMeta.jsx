import { cloneElement, useEffect } from "react";
import { Helmet } from "react-helmet";

function PlayMeta({ id, name, description, cover, component }) {
  useEffect(() => {
    console.log("Play Meta in action!");
  }, [name]);

  // cloneElement(play.component(), { id: play.id });

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta property="og:title" content={name} />
        <meta property="og:description" content={description} />
      </Helmet>
      {cloneElement(component(), { id })}
    </>
  );
}

export default PlayMeta;
