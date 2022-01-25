import { Link } from 'react-router-dom';

const PageNotFound = () => {

  return(
    <main style={{ padding: "1rem" }}>
      <p>OOPs!!! Look like you are lost.</p>
      <p>
        Why don't you go back to <Link to="/">home</Link>?
      </p>
    </main>
  );
};

export default PageNotFound;