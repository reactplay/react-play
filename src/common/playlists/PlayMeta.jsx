import { cloneElement, useEffect, useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import * as plays from "plays";
import { useParams } from "react-router-dom";
import underDevelopment from 'images/underdevelpoment.png'
import { submit } from "common/services/request";
import Loader from "common/spinner/spinner";
import { toKebabCase, toPascalcase, toTitleCase } from "common/services/string";
import { FetchPlaysByID } from "common/services/request/query/fetch-plays";

function PlayMeta() {
  const [loading, setLoading] = useState(true)
  const [play, setPlay] = useState({})
  const [isError, setIsError] = useState(false)
  // const { name, description, path, cover, component } = play;
  // const playFolder = path.split("/")[2];
  let { playid } = useParams(); // return the parameter of url

  // let RenderPlay = null;
  // try {
  //   RenderPlay = require(`../../plays/${playFolder}/${component}`).default;
  // } catch {
  //   RenderPlay = () => (
  //     <PageNotFound
  //       msg='Play is Under Development'
  //       details='Most likely this play is being developed by another creator. You can ignore and continue to build your play.'
  //       Image={underDevelopment}
  //     />
  //   );
  // }

  // let metaImage; // Initialize metaImage variable
  // if (cover) {
  //   metaImage = cover; // If cover path is given, use that
  // } else {
  //   try {
  //     // If not, try finding the cover.png in the play's folder
  //     metaImage = `https://reactplay.io${require(`../../plays/${playFolder}/cover.png`)}`; // It seems that
  //     // some platforms such as Twitter need full, explicit URL's to display images correctly
  //   } catch {
  //     // If no image is available, cover stays as undefined
  //     console.log("No cover available.");
  //   }
  // }

  useEffect(() => {
    submit(FetchPlaysByID(playid)).then(res => {
      setPlay(res[0])
      setLoading(false)
    }).catch(err => {
      setIsError(true)
      setLoading(false)
    })
  },[playid])

  if (loading) {
    return <Loader />;
   }
   if (isError) {
    return <plays.PageNotFound />;
   }
  
   const renderPlayComponent = () => {
    // console.log(__filename)
    // const componentPath = `plays/${toKebabCase(play.name)}/${play.component || toTitleCase(play.name).replace(/ /g,'')}`;
    // console.log(componentPath)
    // const play_cmponent = lazy(() => import(componentPath));
    const Comp = plays[play.component || toTitleCase(play.name).replace(/ /g,'')]
    return <Comp {...play}/>
   }

  //  const getComponent = () => {
  //   comp
  //  }
  return (
    <>
      <Helmet>
        <meta name='description' content={play.description} />
        <meta property='og:title' content={play.name} />
        <meta property='og:description' content={play.description} />
        {play.cover && (
          <meta
            property='og:image'
            content={play.cover}
            data-react-helmet='true'
          />
        )}
        <meta
          property='og:image:alt'
          content={play.description}
          data-react-helmet='true'
        />
        <meta name='twitter:title' content={play.name} data-react-helmet='true' />
        <meta
          name='twitter:description'
          content={play.description}
          data-react-helmet='true'
        />
        {play.cover && (
          <meta
            name='twitter:image'
            content={play.cover}
            data-react-helmet='true'
          />
        )}
      </Helmet>
      <Suspense fallback={<Loader/>}>
        {renderPlayComponent()}
      </Suspense>
      
    </>
  );
}

export default PlayMeta;
