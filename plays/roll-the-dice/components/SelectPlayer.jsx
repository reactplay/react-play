import { useState } from 'react';
import { useGame } from '../hooks/useGame';

const SelectPlayer = () => {
  const [isFriend, setIsFriend] = useState(false);
  const [player, setPlayer] = useState(null);
  const [points, setPoints] = useState(null);

  const { updateSecondPlayer, setPointsToWin } = useGame();

  // Get the second player name from input field
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'player' && value === 'Computer') {
      setIsFriend(false);
      setPlayer(value);
    } else if (name === 'player' && value !== 'Computer') {
      setIsFriend(true);
      setPlayer(null);
    }
    if (name === 'name') {
      setPlayer(value);
    }

    if (name === 'points') {
      setPoints(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player) {
      updateSecondPlayer(player);
      if (points !== null) {
        if (points >= 25) {
          setPointsToWin(points);
        }
      }
    }
  };

  return (
    <div className="rtd__select-player">
      <h3>
        Play With: <span>{player}</span>
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="rtd__form-group">
          <div className="rtd__form-control">
            <input
              id="computer"
              name="player"
              type="radio"
              value="Computer"
              onChange={onChangeHandler}
            />
            <label htmlFor="computer">Computer</label>
          </div>
          <div className="rtd__form-control">
            <input
              id="friend"
              name="player"
              type="radio"
              value="friend"
              onChange={onChangeHandler}
            />
            <label htmlFor="friend">Friend</label>
          </div>
          <div className="rtd__form-control">
            <input
              id="points"
              name="points"
              placeholder="100 - minimum 25 to play"
              type="text"
              value={points}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        {isFriend && (
          <div className="rtd__form-control">
            <label className="span rtd__player-name" htmlFor="name">
              Full Name: <span>*</span>
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter friend's name..."
              type="text"
              onChange={onChangeHandler}
            />
          </div>
        )}
        <button className="rtd__btn rtd__btn-submit" disabled={player ? false : true} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SelectPlayer;
