import Button from './Button';

const ButtonList = () => {
  const buttonList = [
    'All',
    'Dubbing',
    'Music',
    'Gaming',
    'Live',
    'Dramedy',
    'Movies',
    'Bollywood Music',
    'TED',
    'Mixes',
    'Computer Science',
    'podcasts'
  ];

  return (
    <div className="button-list-container">
      {buttonList.map((button, index) => (
        <Button key={index} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
