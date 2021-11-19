const RollDice = ({ rollDice }) => {
  return (
    <div className="border rounded-lg p-2 my-2">
      <h3>Roll Dice</h3>
      <button className="btn btn-primary" onClick={rollDice}>
        Roll
      </button>
    </div>
  );
};

export default RollDice;
