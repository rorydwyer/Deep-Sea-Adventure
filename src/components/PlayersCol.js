import PlayerTab from "./PlayerTab";

const PlayersCol = ({ players, ctx }) => {
  return (
    <div className="col-span-2">
      {players.map((player) => (
        <PlayerTab key={player.id} player={player} ctx={ctx} />
      ))}
    </div>
  );
};

export default PlayersCol;
