import "App.css";
import { Outlet } from "react-router-dom";
import useGetPlays from "common/hooks/useGetPlays";
import { memo } from "react";

function App() {
  const [loading, error, plays] = useGetPlays();
  return (
    <div className="app-body">
      <Outlet context={[loading, error, plays]} />
    </div>
  );
}

export default memo(App);
