import { cloneElement, useEffect, useState, Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import * as plays from "plays";
import { useParams } from "react-router-dom";
import underDevelopment from 'images/underdevelpoment.png'
import { submit } from "common/services/request";
import Loader from "common/spinner/spinner";
import { toKebabCase, toPascalcase, toTitleCase } from "common/services/string";
import { FetchPlaysByID } from "common/services/request/query/fetch-plays";
import {PageNotFound} from 'common'

function PlayMeta() {
  const [loading, setLoading] = useState(true)
  const [play, setPlay] = useState({})
  const [isError, setIsError] = useState(false)
  let { playid } = useParams(); // return the parameter of url

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
