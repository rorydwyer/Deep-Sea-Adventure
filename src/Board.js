import React from "react";

// Import Components
import PlayersCol from "./components/PlayersCol";
import SeaCol from "./components/SeaCol";
import ControlsCol from "./components/ControlsCol";

export class DeepSeaAdventureBoard extends React.Component {
  render() {
    return (
      <div id="board">
        <div className="grid grid-cols-12 gap-4">
          <PlayersCol />
          <SeaCol artifacts={this.props.G.artifacts} players={this.props.G.players} />
          <ControlsCol moves={this.props.moves} events={this.props.events} dice={this.props.G.dice} />
        </div>
      </div>
    );
  }
}
