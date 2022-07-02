import { ReactComponent as Image404 } from "images/img-404.svg";
import "./404.css";
import Loader from "common/spinner/spinner";

const PageNotFound = ({ loading, msg, details, Image }) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <main className='page-404'>
     {Image ? <img src={Image} alt="under-development" className='under-development' /> : <Image404 className='page-404-image' />}
      <p className='page-404-lead'>{msg}</p>
      <p className='page-404-desc'>{details}</p>
    </main>
  );
};

PageNotFound.defaultProps = {
  msg: "Looks like you are lost",
  details: "Why don't you go back to home.",
  Image: null
};

export default PageNotFound;
