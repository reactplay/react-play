import { useContext } from "react";
import CuisineContext from "../context/CuisineContext";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";

const ContextInfoSlider = () => {
  const { index, handlePrev, handleNext } = useContext(CuisineContext);

  return (
    <div className="context-info-slider">
      <div className={`${index === 1 ? "active" : "hidden"}`}>
        <p className="paragraph">
          Sometime, we need to use the state in more than one component. Hence,
          we have to pass it down through <br />
          <code>{`<Parent/>`}</code> to <code>{`<Child/>`}</code> and so on.
          However sometime we may need to pass it down multiple level down the
          tree.
        </p>
        <p className="paragraph">
          and sometime, there is not even a relationship between two components.
          Thats when react context become handy.
        </p>
      </div>
      <div className={`${index === 2 ? "active" : "hidden"}`}>
        <p className="paragraph">
          Consider the example below. As we select the cuisine, we have several
          components dependent on selected cuisine. Some of them are even deeply
          nested.
        </p>
      </div>
      <div className={`${index === 3 ? "active" : "hidden"}`}>
        <p className="paragraph">
          If, we drill down the cuisine from parents to child. It would require
          a lot of efforts. In some cases components are not even in direct
          relation with one another.
        </p>
        <p className="paragraph">
          There are also high chances of errors and mistakes as we need to pass
          down lots of functions and states.
        </p>
      </div>
      <div className={`${index === 4 ? "active" : "hidden"}`}>
        <p className="paragraph">
          <strong>React context </strong>is like a pipe. Props enter at one end
          and exit at another without having to pass it through anywhere in
          between.
        </p>
        <p className="paragraph ">
          we need 3 things in order to use context.&nbsp;
          <strong>createContext, context provider</strong> and{" "}
          <strong>context consumer</strong>
        </p>
        <p className="paragraph ">
          To consume the props we make use of{" "}
          <strong style={{ marginRight: "5px" }}>useContext()</strong>hook
        </p>
      </div>
      <div className={`${index === 5 ? "active" : "hidden"}`}>
        <p>Basic syntax</p>
        <pre>{`   export const cusineContext = createContext();

      <cusineContext.Provider value={{activeCuisine, activeCuisineHandler,uniqCuisines, recipesByCusine,}}>
                 {activeCuisine === null ? <Menu /> : <Main />}
          </cusineContext.Provider>

          const RecipeGrid = () => {
            const { recipesByCusine } = useContext(cusineContext);
          }`}</pre>
      </div>
      <div className="slide-btn-group">
        <button onClick={handlePrev} className="prev">
          <MdSkipPrevious className="slide-btn-icon" />
        </button>
        <button onClick={handleNext} className="next">
          <MdSkipNext className="slide-btn-icon" />
        </button>
      </div>
    </div>
  );
};

export default ContextInfoSlider;
