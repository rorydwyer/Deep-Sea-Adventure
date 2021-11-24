const GrabArtifact = ({ grabArtifact, dropArtifact, endTurn, endPhase }) => {
  return (
    <div className="border rounded-lg p-2 my-2">
      <h3>Grab Treasure?</h3>
      <button className="btn btn-primary" onClick={grabArtifact}>
        Grab Artifact
      </button>
      {/* <button className="btn btn-primary" onClick={dropArtifact}>
        Drop Artifact
      </button> */}
      <button
        className="btn btn-primary"
        onClick={() => {
          endTurn();
          endPhase();
        }}
      >
        End Turn
      </button>
    </div>
  );
};

export default GrabArtifact;
