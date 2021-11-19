export const DeepSeaAdventure = {
  setup: (ctx) => ({
    players: setupPlayers(ctx.numPlayers),
    artifacts: setupArtifactChips(),
    dice: [1, 3],
    oxygen: 25,
  }),

  moves: {
    swimDown: (G, ctx) => {
      G.players[ctx.currentPlayer].direction = "down";
      //   if (G.players[ctx.currentPlayer].depth >= G.artifacts.length - 1) return;
      //   G.players[ctx.currentPlayer].depth++;
    },

    swimUp: (G, ctx) => {
      G.players[ctx.currentPlayer].direction = "up";
      //   if (G.players[ctx.currentPlayer].depth <= -1) return;
      //   G.players[ctx.currentPlayer].depth--;
    },

    rollDice: (G, ctx) => {
      G.dice = ctx.random.Die(3, 2);
      const total = G.dice[0] + G.dice[1];

      // If player is going down, then check if they reach the last artifact
      if (G.players[ctx.currentPlayer].direction === "down") {
        if (G.players[ctx.currentPlayer].depth + total >= G.artifacts.length) {
          G.players[ctx.currentPlayer].depth = G.artifacts.length - 1;
        } else {
          G.players[ctx.currentPlayer].depth += total;
        }

        // If player is going up, then check if they reach the submarine
      } else {
        if (G.players[ctx.currentPlayer].depth - total <= -1) {
          G.players[ctx.currentPlayer].depth = -1;
        } else {
          G.players[ctx.currentPlayer].depth -= total;
        }
      }
    },

    grabArtifact: (G, ctx) => {
      if (G.artifacts[G.players[ctx.currentPlayer].depth].type === "artifact") {
        G.players[ctx.currentPlayer].artifactsCarrying.push(G.artifacts[G.players[ctx.currentPlayer].depth]);
        G.artifacts[G.players[ctx.currentPlayer].depth] = { type: "blank" };
      }
    },

    dropArtifact: (G, ctx, id) => {},

    endTurn: (G, ctx, id) => {},
  },
};

function setupPlayers(numPlayers) {
  let players = [];
  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i + 1,
      name: `Player ${i + 1}`,
      depth: -1,
      direction: "down",
      atSubmarine: false,
      artifactsCarrying: [],
      artifactsSaved: [],
    });
  }
  return players;
}

function setupArtifactChips() {
  let tier1 = suffleArray([0, 0, 1, 1, 2, 2, 3, 3]);
  let tier2 = suffleArray([4, 4, 5, 5, 6, 6, 7, 7]);
  let tier3 = suffleArray([8, 8, 9, 9, 10, 10, 11, 11]);
  let tier4 = suffleArray([12, 12, 13, 13, 14, 14, 15, 15]);

  return [...tier1, ...tier2, ...tier3, ...tier4].map((value, i) => {
    return { id: i + 1, value: value, tier: Math.floor(i / 8) + 1, type: "artifact" };
  });
}

function suffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
