import React from "react";

.contributors {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  text-align: center;
}

.contributor-link {
  text-decoration: none;
  color: inherit;
  transition: transform 0.3s ease;
}

.contributor-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid transparent;
  
}

.contributor-link:hover .contributor-img {
  transform: scale(1.08);
  box-shadow: 0px 6px 15px rgba(0,0,0,0.2);
  border-color: #0077ff;
}
}


const contributors = [
  {
    name: "Contributor 1",
    github: "https://github.com/username1",
    img: "contributor1.jpg",
  },
  {
    name: "Contributor 2",
    github: "https://github.com/username2",
    img: "contributor2.jpg",
  },
  {
    name: "Contributor 3",
    github: "https://github.com/username3",
    img: "contributor3.jpg",
  },
];

export default function Contributors() {
  return (
    <div className="contributors">
      {contributors.map((contrib, index) => (
        <a
          key={index}
          href={contrib.github}
          target="_blank"
          className="contributor-link"
        >
          <img src={contrib.img} alt={contrib.name} className="contributor-img" />
          <p>{contrib.name}</p>
        </a>
      ))}
    </div>
  );
}
