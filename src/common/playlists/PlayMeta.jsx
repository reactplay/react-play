import { cloneElement, useEffect, useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import * as plays from "plays";
import { useParams } from "react-router-dom";
import underDevelopment from 'images/underdevelpoment.png'
import { submit } from "common/services/request";
import Loader from "common/spinner/spinner";
import { toKebabCase, toPascalcase, toTitleCase, toTitleCaseTrimmed } from "common/services/string";
import { FetchPlaysByNameAndUser } from "common/services/request/query/fetch-plays";
import {PageNotFound} from 'common'

function PlayMeta() {
  const [loading, setLoading] = useState(true)
  const [play, setPlay] = useState({})
  const [isError, setIsError] = useState(false)
  let { playname, username } = useParams(); // return the parameter of url
  const [metaImage, setMetaImage] = useState()

  useEffect(() => {
    submit(FetchPlaysByNameAndUser(decodeURI(playname), decodeURI(username))).then(res => {
      const play_obj = res[0];
      setPlay(play_obj)
      if (play_obj.cover) {
        // If cover image path is updated in DB
        setMetaImage( play_obj.cover); // If cover path is given, use that
      } else {
        try {
          let path = play_obj.path;
          // If the cover image path needs to prepared from local path
          if(!path) {
            path = `https://reactplay.io${require(`../../plays/${username}/${playname}/cover.png`)}`
          }
          setMetaImage( path)
          console.log(`DEBUG LOG: Path to cover image: ${path}`)
        } catch {
          // If no image is available, cover stays as undefined
          console.log("No cover available.");
        }
      }
      setLoading(false)
    }).catch(err => {
      setIsError(true)
      setLoading(false)
    })
  },[playname, username])

  if (loading) {
    return <Loader />;
   }
   if (isError) {
    return <PageNotFound />;
   }
  
   const renderPlayComponent = () => {
    const Comp = plays[play.component || toTitleCase(play.name).replace(/ /g,'')]
    return <Comp {...play}/>
   }

  return (
    <>
      <Helmet>
        <meta name='description' content={play.description} />
        <meta property='og:title' content={play.name} />
        <meta property='og:description' content={play.description} />
        {metaImage && (
          <meta
            property='og:image'
            content={metaImage}
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
        {metaImage && (
          <meta
            name='twitter:image'
            content={metaImage}
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
