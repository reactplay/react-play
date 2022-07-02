import { Watch } from "react-loader-spinner";
import "./spinner.css";

const Loader = () => {
  return (
    <div className='reactplay-loader'>
      <Watch color='blue' height='250' width='250' />
    </div>
  );
};

export default Loader;
