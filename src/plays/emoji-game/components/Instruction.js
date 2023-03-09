import emoji from './emoji';

function Instruction() {
  return (
    <div>
      <h1>Instruction</h1>
      <h2>
        1) From the below given emojis pick your favourite emoji (You don't have to tell me, I will
        guess it for you)
      </h2>
      {emoji.map((e) => {
        return <div className="emoji-game-emoji">{e.emoji}</div>;
      })}
      <h2>2) Now select the rows in which your emoji is situated</h2>
    </div>
  );
}

export default Instruction;
