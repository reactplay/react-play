// PACKAGES
import { useReducer, useEffect } from "react";
import { useAuthenticationStatus, useUserData } from "@nhost/react";
import { useNavigate, useLocation, useParams } from "react-router-dom";

// COMPONENTS & FILES
import PlayForm from "common/components/PlayForms";
import Loader from "common/spinner/spinner";
import { ReactComponent as NotAllowedImage } from "../../images/img-403.svg";
import PageNotFound from "common/404/PageNotFound";

// UTILS
import { FIELD_TEMPLATE } from "./create-play-form-template";
import { defaultInputFields, createStateObject } from "./utils";

// CONSTANTS
import { NHOST } from "common/const";

// SREVICES
import { FetchPlaysBySlugAndUser } from "common/services/request/query/fetch-plays";
import { Tags, Levels, Issues } from "common/services";
import { Plays } from "common/services/plays";
import { submit } from "common/services/request";
import { updatePlayInfo } from "common/services/request/query/edit-play";

// STYLES
import "./create-play.scss";

const NoCreationInProdScreen = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-8'>
      <div>
        <NotAllowedImage width={550} />
      </div>
      <div className='text-center'>
        You can't create plays in production
        <br />
        <a
          className='text-link-default'
          href='https://github.com/reactplay/react-play/blob/main/CREATE-PLAY.md'
          target='_blank'
          rel='noopener noreferrer'
        >
          read this
        </a>
        for more details
      </div>
    </div>
  );
};

const reducer = (state, updatedState) => ({ ...state, ...updatedState });

const initialState = {
  creator: null,
  storedData: {},
  loadingText: "Loading authentication information.",
  formData: { ...defaultInputFields },
  isDataLoading: false,
  errorMessage: "", // length 0 means no error or false value
};

const CreatePlay = () => {
  const location = useLocation();
  const { isAuthenticated, isLoading } = useAuthenticationStatus();
  // const [searchParams] = useSearchParams();
  const { username = "", playname = "" } = useParams();
  const validParams = !!username && !!playname;
  const [state, setState] = useReducer(reducer, initialState);

  const { creator, loadingText, storedData, formData, isDataLoading, errorMessage } = state;

  const isEditPlay = location.pathname.includes("editplay") && validParams;
  const userData = useUserData();
  let navigate = useNavigate();

  const fetchPlayInfo = async () => {
    if (isEditPlay) {
      try {
        const res = await submit(FetchPlaysBySlugAndUser(decodeURI(playname), decodeURI(username)));
        if (!res.length) throw new Error("Play Not Found");
        const data = res[0];
        const checkPlayOwenership = data?.user?.id === userData?.id;
        if (checkPlayOwenership) {
          return setState({
            creator: data.user?.id,
            formData: createStateObject(data, storedData),
          });
        }
        return setState({ creator: null });
      } catch (err) {
        setState({ errorMessage: err?.message ?? "Something Went Wrong" });
      }
    }
  };

  useEffect(() => {
    setState({ creator: null, errorMessage: "", storedData: {} });
  }, [location.pathname]);

  const initializeData = () => {
    if (Object.keys(storedData).length === 0) {
      setState({ isDataLoading: true, loadingText: "Loading Information" });
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
        .then(async (res) => {
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
          await fetchPlayInfo();
          return setState({ storedData: { ...storedData } });
        })
        .finally(() => {
          return setState({ isDataLoading: false, loadingText: "" });
        });
    }
  };

  const onSubmit = async (formData) => {
    const { id, ...rest } = formData;
    try {
      if (isEditPlay) {
        const prepareObj = { play_id: id, user_id: userData?.id, editObj: rest };
        // const response = await submit(updatePlayInfo(prepareObj));
        return console.log(prepareObj);
      }
      setState({ loadingText: "Creating Play", isDataLoading: true });
      const res = await Plays.createPlay(rest);
      navigate(`/plays/created/${res}`);
    } catch (err) {
      alert("Something Error Occured");
    } finally {
      setState({ isDataLoading: false, loadingText: "" });
    }
  };

  // if (process.env.NODE_ENV === "development" && location.pathname !== "editplay") {
  //   return <NoCreationInProdScreen />;
  // }

  if (isLoading || isDataLoading) {
    return (
      <Loader
        title={loadingText || "Loading authentication information"}
        subtitle='Please wait....'
      />
    );
  }

  if (!isAuthenticated && !isEditPlay) {
    window.location = NHOST.AUTH_URL(
      `http://localhost:${process.env.RAECT_APP_DEV_PORT ?? "3000"}/plays/create`
    );
    return null;
  } else if (!isAuthenticated && isEditPlay) {
    window.location = NHOST.AUTH_URL(window.location.href, "github");
    return null;
  } else {
    initializeData();
  }

  if (isDataLoading) {
    <Loader title={"Loading data"} subtitle='Please wait....' />;
  }

  if (isEditPlay && !creator && !errorMessage) {
    return (
      <PageNotFound msg="You don't own this play" details='Only Owner is able to edit their play' />
    );
  }

  if (errorMessage) {
    return <PageNotFound msg='Something Error Occured' details='apologize for the inconvenience' />;
  }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center create-plays-wrapper'>
      <div>
        <span className='title-primary'>
          {!isEditPlay ? (
            <>
              Create <strong>A Play</strong>
            </>
          ) : (
            <>
              Edit <strong>Play</strong>
            </>
          )}
        </span>
      </div>
      <div className='w-full h-full max-w-6xl flex bg-white shadow-md rounded mb-6'>
        <div className='flex flex-col flex-1'>
          <div className='h-14 p-8'>
            Welcome <strong>{userData.displayName}</strong>, {!isEditPlay ? "create" : "edit"} your
            play
          </div>
          <PlayForm
            isEditPlay={isEditPlay}
            fields={FIELD_TEMPLATE}
            onSubmit={onSubmit}
            formDataObj={formData}
          />
        </div>
      </div>
    </div>
  );
};

export default CreatePlay;
