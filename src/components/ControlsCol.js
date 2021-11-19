import ChooseDirection from "./ChooseDirection";
import RollDice from "./RollDice";
import GrabArtifact from "./GrabArtifact";

const ControlsCol = ({ moves, events, dice }) => {
  return (
    <div id="controls-col" className="col-span-2">
      <ChooseDirection swimDown={moves.swimDown} swimUp={moves.swimUp} />
      <RollDice rollDice={moves.rollDice} dice={dice} />
      <GrabArtifact grabArtifact={moves.grabArtifact} dropArtifact={moves.dropArtifact} endTurn={events.endTurn} />
    </div>
  );
};

export default ControlsCol;
