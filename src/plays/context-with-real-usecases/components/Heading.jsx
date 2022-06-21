import CuisineModal from "./CuisineModal";
const Heading = ({ activeCuisine }) => {
  return (
    <div className="heading-component">
      {activeCuisine === null ? (
        <>Please Select the cuisine</>
      ) : (
        <>
          You are looking at{" "}
          <span style={{ fontWeight: "bold", fontSize: "30px" }}>
            {activeCuisine}{" "}
          </span>
          recipes
        </>
      )}
      <CuisineModal />
    </div>
  );
};

export default Heading;
