import zoomsupport from '../../assets/chatbot/zoomsupport.png';

const FlightBotAvatar = () => {
  const now = new Date();
  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  }).format(now);

  return (
    <div className="relative flex items-baseline gap-3">
      <img alt="zoomsupport" className="w-11 h-11 absolute bottom-[-44px]" src={zoomsupport} />
      <div className="flex">
        <div className="pb-2 pl-16 text-xs " style={{ fontSize: '11px' }}>
          Bot{' '}
          <span
            className="inline-block bg-gray-100 text-[#02021c99] px-1 mx-1 font-bold"
            style={{ fontSize: '10px' }}
          >
            BOT
          </span>{' '}
          <span className="text-[#0404138f]" style={{ fontSize: '11px' }}>
            {formattedTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FlightBotAvatar;
