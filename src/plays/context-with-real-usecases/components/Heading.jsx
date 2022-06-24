import CuisineModal from "./CuisineModal";
import { cusineContext } from "../ContextWithRealUsecases";
import { useContext } from "react";
const Heading = () => {
  const { activeCuisine } = useContext(cusineContext);
  return (
    <div className="heading-component">
      {activeCuisine === null ? (
        <>Please Select the cuisine</>
      ) : (
        <>
          You are looking at
          <span
            style={{ fontWeight: "bold", fontSize: "30px", margin: "0 10px" }}
          >
            {activeCuisine}
          </span>
          recipes
        </>
      )}
      {activeCuisine && <CuisineModal />}
    </div>
  );
};

export default Heading;
