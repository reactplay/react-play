import { useEffect, useState } from "react";
import { NhostClient, useAuthenticationStatus, useUserData } from "@nhost/react";
import { Tags, Levels, Issues } from "common/services";
import Button from '@mui/material/Button';

import PlayForm from "common/components/PlayForms";
import { NHOST } from "common/const";
import ReactMarkdown from 'react-markdown';
import MarkdownPreview from '@uiw/react-markdown-preview';
import { FIELD_TEMPLATE } from "./create-play-form-template";
import './create-play.scss'




const CreatePlay = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [dataLoading,setDataLoading] = useState(true)
  const [storedData, setStoredData] = useState({})
  const [formData, setFormData] = useState({})

  useEffect(() => {
      if(!isLoading) {
        if(isAuthenticated) {
          initializeData()
        } else{
          console.log("Its not authenticated. Redirecting")
          window.location= NHOST.AUTH_URL
        }
      }

      }, [isLoading])

    const onChange = (key, value) => {
      setFormData({...formData, ...{[key]: value}})
    }
    const isFieldsAreInValid = () => {
      let res = false;
      FIELD_TEMPLATE.forEach(tmpl => {
        if(tmpl.required && (!formData || !formData[tmpl.datafield])) {
          res = true
        }
      })
      return res;
    }

  const initializeData = () => {
    const all_apis = [{name: 'tags', method: Tags.getAllTags}, {name: 'level', method: Levels.getAllLevels}, { name: "issue", method: Issues.getIssues}];
    const promises = []
    all_apis.forEach(api => {
      promises.push(api.method())
    })

    Promise.all(promises).then((res) => {
      res.forEach((rApi, rApi_ind) => {
        const api_obj = all_apis[rApi_ind];
        storedData[api_obj.name] = rApi;
        const anyField = FIELD_TEMPLATE.filter(field => {
          return field.datafield === api_obj.name
        })
        if(anyField.length) {
          anyField[0].options = rApi
        }
      })
      setStoredData({...storedData})
      setDataLoading(false)
    })
  }
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center create-plays-wrapper">
      <div>
      <span className='title-primary'>
        Create <strong>A Play</strong>
      </span>
      </div>
    {/* <div className="container mx-auto bg-[#FFFFFF] w-1/2 shadow-2xl p-3 ">
      {
        dataLoading ? (<div></div>): (<PlayForm fields={FIELD_TEMPLATE}/>)
      }
    </div> */}
    <div class="w-full max-w-6xl flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
      {/* <div className="flex-1">
      <MarkdownPreview source={'https://raw.githubusercontent.com/reactplay/react-play/main/CREATE-PLAY.md'} />
        <ReactMarkdown source={'https://raw.githubusercontent.com/reactplay/react-play/main/CREATE-PLAY.md'} />
        </div> */}
      <div className="flex-1">
  <form class="">
  {
        dataLoading ? (<div></div>): (<PlayForm fields={FIELD_TEMPLATE} onChange={(k,v) => onChange(k,v)}/>)
      }
    <div class="flex items-center justify-between">
      <Button variant="contained" disabled={isFieldsAreInValid()}>
        Create the awesome
      </Button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Reset?
      </a>
    </div>
  </form>
    </div>
    </div></div>
  )
};

export default CreatePlay;
