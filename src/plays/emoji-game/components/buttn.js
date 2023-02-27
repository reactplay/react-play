import './buttn.css';

function Btn(props) {
  return (
    <div>
      <button className="row" id={props.id} onClick={props.fn}>
        {' '}
        {props.emoji}{' '}
      </button>
    </div>
  );
}

export default Btn;
