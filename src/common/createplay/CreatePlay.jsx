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

// DEMO OBJECT NEEDED IN ORDER TO EDIT
// {
//   name: "demoplay",
//   description: "description of play",
//   issue: {
//     name: "Dark and Light Mode Implemented on the ReactPlay Website",
//     value: 522,
//   },
//   language: {
//     name: "JavaScript",
//     value: "js",
//   },
//   style: {
//     name: "CSS",
//     value: "css",
//   },
//   level: {
//     id: "4127ed16-bf37-4c34-bed0-282cd646cd53",
//     name: "Beginner",
//     value: "4127ed16-bf37-4c34-bed0-282cd646cd53",
//   },
//   github: "Angryman18",
//   tags: [
//     {
//       id: "914e9491-b1f6-4b90-ad0f-727eabd5a41e",
//       name: "JSX",
//     },
//     {
//       id: "457a8807-3c4a-4868-9113-104482837650",
//       name: "Component Structure",
//     },
//   ],
//   cover: "cover img",
//   blog: "blog url",
//   video: "video url",
// };

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
        const ownerOfPlay = data?.user?.id === userData?.id;
        if (ownerOfPlay) {
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

  const onSubmit = (formData) => {
    if (isEditPlay) return console.log(formData);
    setState({ loadingText: "Creating Play", isDataLoading: true });
    formData.owner_user_id = userData.id;
    Plays.createPlay(formData).then((res) => {
      navigate(`/plays/created/${res}`);
      setState({ isDataLoading: false, loadingText: "" });
    });
  };

  if (process.env.NODE_ENV === "development" && location.pathname !== "editplay") {
    return <NoCreationInProdScreen />;
  }

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
          Create <strong>A Play</strong>
        </span>
      </div>
      <div className='w-full h-full max-w-6xl flex bg-white shadow-md rounded mb-6'>
        <div className='flex flex-col flex-1'>
          <div className='h-14 p-8'>
            Welcome <strong>{userData.displayName}</strong>, create your play
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
