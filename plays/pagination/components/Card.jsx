import React from 'react';

const Card = (user) => {
  const { login, avatar_url, html_url } = user;

  return (
    <div className=" bg-white rounded-md shadow-xl hover:scale-105 transition-all duration-500 p-8 text-center">
      <div className=" w-28 h-28 m-auto border-4 border-teal-500 rounded-full overflow-hidden">
        <img alt={login} className="" src={avatar_url} />
      </div>
      <div className="">
        <h3 className="capitalize my-2 font-semibold text-xl text-gray-900">
          <a href={html_url} rel="noopener noreferrer" target="_blank">
            {login}
          </a>
        </h3>
        <a
          className="bg-teal-500 hover:bg-orange-500 text-gray-50 px-4 py-[6px] text-sm rounded inline-block"
          href={`https://github.com/${login}?tab=repositories`}
          rel="noreferrer"
          target="_blank"
        >
          Repositories
        </a>
      </div>
    </div>
  );
};

export default Card;
