import Submarine from "./Submarine";
import Diver from "./Diver";
import Artifact from "./Artifact";

const SeaCol = ({ artifacts, oxygen, players }) => {
  return (
    <div className="col-span-8 relative">
      {players.map((player, i) => (
        <Diver player={player} key={i} />
      ))}

      <Submarine oxygen={oxygen} />

      {artifacts.map((artifact, i) => (
        <Artifact key={i} artifact={artifact} depth={i} />
      ))}
    </div>
  );
};

export default SeaCol;
