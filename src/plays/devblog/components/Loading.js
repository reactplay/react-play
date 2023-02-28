import React from 'react';

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[150px] h-[150px]">
        <div className="devBlog-loading loading--full-height" />
      </div>
    </div>
  );
};

export default Loading;
