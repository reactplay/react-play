import { Link } from 'react-router-dom';
import { ReactComponent as Image404 } from "images/img-404.svg";
import "./404.css";
import Loader from 'common/spinner/spinner';

const PageNotFound = ({loading}) => {

  if (loading) {
    return <Loader />
  }

  return(
    <main className='page-404'>
      <Image404 className="page-404-image" />
      <p className='page-404-lead'>Look like you are lost</p>
      <p className='page-404-desc'>
        Why don't you go back to <Link to="/" className='page-404-link'>home</Link>?
      </p>
    </main>
  );
};

export default PageNotFound;