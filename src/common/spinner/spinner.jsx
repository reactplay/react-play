// cores
import { memo } from 'react';

// modules
import { Watch } from 'react-loader-spinner';

// styles
import './spinner.scss';

const LoaderContentChild = (data = null, type = 'title') => {
  if (data) {
    const className =
      type === 'title' ? 'reactplay-loader--text__title' : 'reactplay-loader--text__title';
    return <div className={className}>{data}</div>;
  }
};

const LoaderContent = ({ title, subTitle }) => {
  if (title || subTitle) {
    return (
      <div className="reactplay-loader--text">
        <LoaderContentChild data={title} type="title" />
        <LoaderContentChild data={subTitle} type="subTitle" />
      </div>
    );
  }
};

const Loader = ({ title, subTitle }) => {
  return (
    <div className="reactplay-loader">
      <Watch color="#0096AB" height="100" width="100" />
      <LoaderContent title={title} subTitle={subTitle} />
    </div>
  );
};

export default memo(Loader);
