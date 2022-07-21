import React from "react";
const Blogs = ({ image, url, title, desc, readTime }) => {
  return (
    <div className="blog-one">
      <img src={image} alt="" />
      <a href={url}>
        <h2 className="title">{title}</h2>
      </a>
      <p className="desc">{desc}</p>
      <p className="reading-time"><i class="fas fa-clock"></i><span>{readTime}</span> min</p>
    </div>
  );
};

export default Blogs;
