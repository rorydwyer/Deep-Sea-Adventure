import ChooseDirection from "./ChooseDirection";
import RollDice from "./RollDice";
import GrabArtifact from "./GrabArtifact";

const ControlsCol = ({ moves }) => {
  return (
    <div id="controls-col" className="col-span-2">
      <ChooseDirection swimDown={moves.swimDown} swimUp={moves.swimUp} />
      <RollDice rollDice={moves.rollDice} />
      <GrabArtifact grabArtifact={moves.grabArtifact} dropArtifact={moves.dropArtifact} endTurn={moves.endTurn} />
    </div>
  );
};

export default ControlsCol;
