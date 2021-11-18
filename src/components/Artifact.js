const Artifact = ({ artifact }) => {
  return <div className={`artifact text-white text-center w-16 h-16 m-2 rounded-lg shadow tier-${artifact.tier}`}>{artifact.value}</div>;
};

export default Artifact;
