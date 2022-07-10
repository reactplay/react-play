import { useEffect, useState } from "react";
import { useAuthenticationStatus, useUserData } from "@nhost/react";
import { Tags, Levels, Issues } from "common/services";
import Button from '@mui/material/Button';

import PlayForm from "common/components/PlayForms";
import { NHOST } from "common/const";
import { FIELD_TEMPLATE } from "./create-play-form-template";
import './create-play.scss'
import Loader from "common/spinner/spinner";
import { Plays } from "common/services/plays";
import { useNavigate } from "react-router-dom";

const CreatePlay = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const userData = useUserData()
  let navigate = useNavigate();


  const [loadingText, setLoadingText] = useState("Loading form information.")
  const [storedData, setStoredData] = useState({})
  const [formData, setFormData] = useState({})
  const [isDataLoading, setIsDataLoading] = useState(false)

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

    const onChange = (data) => {
      setFormData({...data})
    }
    const isFieldsAreInValid = () => {
      return false;
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
    }).finally(() => {
      setIsDataLoading(false)
    })
  }

  const onSubmit = () => {
    setLoadingText("Creating play.")
    setIsDataLoading(true)
    formData.owner_user_id = userData.id;
    Plays.createPlay(formData).then(res => {
      navigate(`/plays/created/${res}`);
      setIsDataLoading(false)
    })
  }
  
  return (
    <div className="w-full h-full px-5 flex flex-col justify-center items-center create-plays-wrapper">
      <div>
      <span className='title-primary'>
        Create <strong>A Play</strong>
      </span>
      </div>
    <div className="w-full h-full max-w-6xl flex bg-white shadow-md rounded px-8 pt-6 pb-8 mb-6">
      <div className="flex-1"> {
        isDataLoading ? (<Loader title={loadingText} subtitle="Please wait...."/>): (<form><PlayForm fields={FIELD_TEMPLATE} onChange={(data) => onChange(data)}/><div className="flex items-center justify-between">
        <Button variant="contained" disabled={isFieldsAreInValid()} onClick={() => onSubmit()}>
          Create the awesome
        </Button>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Reset?
        </a>
      </div>
    </form>)
      }
  
 
    
    </div>
    </div></div>
  )
};

export default CreatePlay;
