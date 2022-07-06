import { useEffect, useState } from "react";
import { NhostClient, useAuthenticationStatus, useUserData } from "@nhost/react";
import { Tags, Levels } from "common/services";
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PlayForm from "common/components/PlayForms";
import { NHOST } from "common/const";
import ReactMarkdown from 'react-markdown';
import MarkdownPreview from '@uiw/react-markdown-preview';
import './play-created.scss'

const PlayCreated = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center create-plays-wrapper">
      <div>
      <span className='title-primary'>
        <strong>Play Name</strong> Created
      </span>
      </div>
    {/* <div className="container mx-auto bg-[#FFFFFF] w-1/2 shadow-2xl p-3 ">
      {
        dataLoading ? (<div></div>): (<PlayForm fields={FIELD_TEMPLATE}/>)
      }
    </div> */}
    <div class="w-full max-w-6xl flex flex-col bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
      <div>
     Congratulations! Your play has been created
     </div>
     <div>
     <ol className="ordered-list">
      <li className="ordered-nav--link">
        Fork <a className="play-create-anchor" href="https://github.com/reactplay/react-play" target="_blank" >reactplay</a> repository
      </li>
      <li>
        Run following command on you project folder<code className="console-wrapper">npx create-react-play -c 123-456-789</code>
      </li>
      <li>
        Install dependencies<code className="console-wrapper">npm install <br/># OR <br/> yarn </code>
      </li>
      <li>
        Start application<code className="console-wrapper">npm start <br/><i># OR </i><br/> yarn start</code>
      </li>
      <li>
        Find your play under <code className="console-wrapper">&lt;reactplay&gt;/src/plays/play-name</code>
      </li>
     </ol>
     <div>
      Refer <a className="play-create-anchor" href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md" target="_blank">play creation guide</a> for more information
      </div><div>
      Happy coding
     </div>
     </div>
    </div></div>
  )
};

export default PlayCreated;
