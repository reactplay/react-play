import './buttn.css';

function Btn(props) {
  return (
    <div>
      <button className="emoji-game-row" id={props.id} onClick={props.fn}>
        {' '}
        {props.emoji}{' '}
      </button>
    </div>
  );
}

export default Btn;
