import { Watch } from 'react-loader-spinner';
import './spinner.scss';

const Loader = ({ title, subtitle }) => {
  return (
    <div className="reactplay-loader">
      <Watch color="#0096AB" height="100" width="100" />
      <div className="reactplay-loader--text">
        <div className="reactplay-loader--text__title">{title}</div>
        <div className="reactplay-loader--text__subtitle">
          <div>{subtitle}</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
