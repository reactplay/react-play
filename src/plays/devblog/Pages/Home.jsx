import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';

const Home = ({ articles }) => {
  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article, i) => <Post article={article} key={i} />)
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Home;
