import React from 'react';
import Card from './Card';

interface IProps {
  content: any[];
}

const CardContainer = ({ content }: IProps) => {
  if (!content) return <h1 className="text-2xl text-center">No Videos to Preview</h1>;

  return (
    <>
      {content?.map((data) => {
        return (
          <>{data?.type === 'video' && <Card key={data?.video?.videoId} video={data?.video} />}</>
        );
      })}
    </>
  );
};

export default CardContainer;
