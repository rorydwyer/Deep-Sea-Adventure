const ChooseDirection = ({ swimDown, swimUp }) => {
  return (
    <div className="border rounded-lg p-2 my-2">
      <h3>Choose Direction</h3>
      <button className="btn btn-primary" onClick={swimUp}>
        Go Back
      </button>
      <button className="btn btn-primary" onClick={swimUp}>
        Swim Deeper
      </button>
    </div>
  );
};

export default ChooseDirection;
