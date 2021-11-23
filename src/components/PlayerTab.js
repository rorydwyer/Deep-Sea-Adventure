const PlayerTab = ({ player, ctx }) => {
  return (
    <div className={`player-tab w-full p-2 my-4 shadow-md flex align-middle tab-${player.id} ${ctx.currentPlayer == player.id ? "active" : ""}`}>
      <div className="dot inline-block w-6 h-6 rounded-full mr-3"></div>
      <div>
        <span className="text-xl font-semibold mr-3">{player.name}</span>
        <span>Total: {player.artifactsCarrying.length}</span>
      </div>
    </div>
  );
};

export default PlayerTab;
