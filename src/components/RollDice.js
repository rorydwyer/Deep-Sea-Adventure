import { useState } from "react";

const RollDice = ({ player, rollDice, dice }) => {
  //   const [dice, setDice] = useState([]);

  return (
    <div className="border rounded-lg p-2 my-2">
      <h3>Roll Dice</h3>
      <div id="dice" className="flex justify-evenly">
        <span className="m-2">{dice[0]}</span>
        <span className="m-2">{dice[1]}</span>
      </div>
      <div>
        <span>Moves subtracted from treasure: {player.artifactsCarrying.length ? "-" + player.artifactsCarrying.length : "0"}</span>
      </div>
      <div>
        <span>Total moves: {Math.max(dice[0] + dice[1] - player.artifactsCarrying.length, 0)}</span>
      </div>
      <button className="btn btn-primary" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

export default RollDice;
