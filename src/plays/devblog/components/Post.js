import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ article }) => {
  return (
    <div className="grid grid-cols-3 p-5">
      <div className="article-img">
        {article.cover_image ? (
          <img alt={article.title} className="w-[400px] h-full" src={article.cover_image} />
        ) : (
          <img
            alt="no thumbnail found"
            className="w-[400px]"
            src="https://sternbergclinic.com.au/wp-content/uploads/2020/03/placeholder.png"
          />
        )}
      </div>
      <div className="article-info flex flex-col px-4 py-2 col-start-2 col-end-3">
        <h3 className="text-2xl pb-3">{article.title}</h3>
        <p className="pb-3">{article.description}</p>
        <div className=" mt-auto">
          <Link className="text-xl px-5 py-3 bg-blue-600 text-white" to={`article/${article.id}`}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
