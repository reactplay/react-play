import React from 'react';
import Card from './Card';

interface IProps {
  content: any[];
}

const CardContainer = ({ content }: IProps) => {
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
