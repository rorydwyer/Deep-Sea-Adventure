import Artifact from "./Artifact";
import BlankChip from "./BlankChip";

const SeaCol = ({ artifacts }) => {
  return (
    <div className="col-span-8">
      <BlankChip />
      {artifacts.map((artifact, i) => (
        <Artifact key={i} artifact={artifact} />
      ))}
    </div>
  );
};

export default SeaCol;
