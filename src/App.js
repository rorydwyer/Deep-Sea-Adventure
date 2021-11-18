import "./App.css";

import { Client } from "boardgame.io/react";
import { DeepSeaAdventure } from "./Game";
import { DeepSeaAdventureBoard } from "./Board";

const App = Client({
  game: DeepSeaAdventure,
  board: DeepSeaAdventureBoard,
});

export default App;
