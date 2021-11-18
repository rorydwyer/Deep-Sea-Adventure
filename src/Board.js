import React from "react";

// Import Components
import PlayersCol from "./components/PlayersCol";
import SeaCol from "./components/SeaCol";
import ControlsCol from "./components/ControlsCol";

export class DeepSeaAdventureBoard extends React.Component {
  render() {
    return (
      <div id="board">
        <div className="grid grid-cols-12">
          <PlayersCol />
          <SeaCol artifacts={this.props.G.artifacts} />
          <ControlsCol />
        </div>
      </div>
    );
  }
}
