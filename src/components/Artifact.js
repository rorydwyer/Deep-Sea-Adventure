const Artifact = ({ artifact, depth }) => {
  return (
    <>
      {artifact.type === "artifact" ? (
        <div id={`artifact-${depth}`} className={`artifact text-white text-center w-16 h-16 m-2 rounded-lg shadow tier-${artifact.tier}`}>
          {artifact.value}
        </div>
      ) : (
        <div className="blank-chip w-16 h-16 m-2 text-white text-center shadow-lg rounded-full">X</div>
      )}
    </>
  );
};

export default Artifact;
