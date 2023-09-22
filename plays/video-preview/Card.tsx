import React from 'react';
import { formatDurationCount, formatViewCount } from '../../common/utils/formatCount';
import { GoVerified } from 'react-icons/go';
import { VERIFIED_CHANNEL } from './utils/constants';

interface IProps {
  video: {
    author: {
      avatar: [
        {
          url: string;
        }
      ];
      badges: [
        {
          type: string;
        }
      ];
      title: string;
    };
    descriptionSnippet: string;
    isLiveNow: boolean;
    lengthSeconds: number;
    movingThumbnails: [
      {
        url: string;
      }
    ];
    publishedTimeText: string;
    stats: {
      views: string;
    };
    thumbnails: [{ url: string }];
    title: string;
    videoId: string;
  };
}

const Card = ({ video }: IProps) => {
  const [isMouseOverVideo, setIsMouseOverVideo] = React.useState(false);
  const [isThumbnailMoving, setIsThumbnailMoving] = React.useState(false);

  const mouseOverThumbnail = () => setIsMouseOverVideo(true);
  const mouseOutThumbnail = () => {
    setIsMouseOverVideo(false);
    setIsThumbnailMoving(true);
  };

  React.useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMouseOverVideo) {
      timeoutId = setTimeout(() => {
        setIsThumbnailMoving(true);
      }, 2000);
    }

    return () => {
      clearTimeout(timeoutId);
      setIsThumbnailMoving(false);
    };
  }, [isMouseOverVideo]);

  return (
    <div className="flex cursor-pointer h-[280px] p-[8px] max-h-[200px] gap-[14px]">
      <div
        className="w-[450px] relative"
        onMouseOut={mouseOutThumbnail}
        onMouseOver={mouseOverThumbnail}
      >
        {!isThumbnailMoving ? (
          <>
            <img className="object-cover rounded-[8px]" src={video?.thumbnails[0]?.url} />
            <div className="flex absolute bottom-[0.25px] right-[3px] bg-[#000000] text-[#FFFFFF] p-[2px] rounded-[4px]">
              {isMouseOverVideo
                ? 'Keep hovering to play'
                : formatDurationCount(video?.lengthSeconds)}
            </div>
          </>
        ) : (
          <>
            {video?.movingThumbnails && (
              <img className="w-[450px]" src={video?.movingThumbnails[0]?.url} />
            )}
          </>
        )}
      </div>
      <div className="w-[100%] flex-col">
        <div className="w-[100%] flex-wrap align-middle justify-start">
          <p className="font-normal text-[18px]">{video?.title}</p>
        </div>
        <div>
          <ul className="flex text-[10px] m-0">
            <li className="list-none mr-[20px]">
              {!video?.isLiveNow
                ? `${formatViewCount(video?.stats?.views)} views`
                : `${video?.stats?.views} watching`}
            </li>
            {!video?.isLiveNow && <li>{video?.publishedTimeText}</li>}
          </ul>
        </div>
        <div className="flex align-middle justify-start gap-[10px] mt-[10px]">
          <div className="w-[40px]">
            <img className="rounded-full" src={video?.author?.avatar[0]?.url} />
          </div>
          <div>
            <div className="flex justify-center text-[12px] mr-[8px] mt-[10px]">
              <p className="align-middle">{video?.author?.title}</p>
              {video?.author?.badges[0]?.type == VERIFIED_CHANNEL && (
                <GoVerified className="ml-[10px] mt-[2px]" size="12px" />
              )}
            </div>
          </div>
        </div>
        <div className="mt-[10px]">
          <p className="text-[10px]">{video?.descriptionSnippet}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
