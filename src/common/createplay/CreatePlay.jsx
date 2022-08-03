import { useState } from "react";
import { useAuthenticationStatus, useUserData } from "@nhost/react";
import { Tags, Levels, Issues } from "common/services";
import Button from "@mui/material/Button";

import PlayForm from "common/components/PlayForms";
import { NHOST } from "common/const";
import { FIELD_TEMPLATE } from "./create-play-form-template";
import "./create-play.scss";
import Loader from "common/spinner/spinner";
import { Plays } from "common/services/plays";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { ReactComponent as NotAllowedImage } from "../../images/img-403.svg"

const NoCreationInProdScreen = () => {
  return <div className="w-full h-full flex flex-col justify-center items-center gap-8">
    <div>
      <NotAllowedImage width={550} />
    </div>

    <div className="text-center">
      You can't create plays in production
      <br />
      <a className="text-link-default" href="https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md" target="_blank" rel="noopener noreferrer">read this</a> for more details
    </div>
  </div>
}

const CreatePlay = () => {
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  const [searchParams] = useSearchParams();

  const userData = useUserData();
  let navigate = useNavigate();

  const [loadingText, setLoadingText] = useState(
    "Loading authentication information."
  );
  const [storedData, setStoredData] = useState({});
  const [formData, setFormData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  const onChange = (data) => {
    setFormData({ ...data });
  };

  const isFieldsAreInValid = () => {
    let res = false;
    FIELD_TEMPLATE.forEach((tmpl) => {
      if (tmpl.required && (!formData || !formData[tmpl.datafield])) {
        res = true;
      }
    });
    return res;
  };

  const initializeData = () => {
    if (Object.keys(storedData).length === 0) {
      setIsDataLoading(true);
      setLoadingText("Loading information.");
      const all_apis = [
        { name: "tags", method: Tags.getAllTags },
        { name: "level", method: Levels.getAllLevels },
        { name: "issue", method: Issues.getIssues },
      ];
      const promises = [];
      all_apis.forEach((api) => {
        promises.push(api.method());
      });

      Promise.all(promises)
        .then((res) => {
          res.forEach((rApi, rApi_ind) => {
            const api_obj = all_apis[rApi_ind];
            storedData[api_obj.name] = rApi;
            const anyField = FIELD_TEMPLATE.filter((field) => {
              return field.datafield === api_obj.name;
            });
            if (anyField.length) {
              anyField[0].options = rApi;
            }
          });
          setStoredData({ ...storedData });
        })
        .finally(() => {
          setIsDataLoading(false);
          setLoadingText("");
        });
    }
  };

  const onSubmit = () => {
    setLoadingText("Creating play.");
    setIsDataLoading(true);
    formData.owner_user_id = userData.id;
    Plays.createPlay(formData).then((res) => {
      navigate(`/plays/created/${res}`);
      setIsDataLoading(false);
      setLoadingText("");
    });
  };

  if (process.env.NODE_ENV !== "development") {
    return <NoCreationInProdScreen />
  }

  if (isLoading || isDataLoading) {
    return (
      <Loader
        title={loadingText || "Loading authentication information"}
        subtitle="Please wait...."
      />
    );
  }

  const refreshToken = searchParams.get("refreshToken");
  // setValue(refreshToken);

  if (!isAuthenticated) {
    if (refreshToken) {
      console.log(refreshToken);
    } else {
      window.location = NHOST.AUTH_URL;
      return null;
    }
  } else {
    initializeData();
  }

  if (isDataLoading) {
    <Loader title={"Loading data"} subtitle="Please wait...." />;
  }

  return (
    <div className="w-full h-full flex flex-col justify-center items-center create-plays-wrapper">
      <div>
        <span className="title-primary">
          Create <strong>A Play</strong>
        </span>
      </div>
      <div className="w-full h-full max-w-6xl flex bg-white shadow-md rounded mb-6">
        <div className="flex flex-col flex-1">
          <div className="h-14 p-8">
            Welcome <strong>{userData.displayName}</strong>, create your play
          </div>

          <div className="flex-1 px-10 py-8 overflow-auto">
            <form>
              <PlayForm
                fields={FIELD_TEMPLATE}
                onChange={(data) => onChange(data)}
              />
            </form>
          </div>
          <div className="h-14">
            <hr />
            <div className="p-8 h-full flex items-center">
              <Button
                size="small"
                variant="contained"
                disabled={isFieldsAreInValid()}
                onClick={() => onSubmit()}
              >
                Create the awesome
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlay;
