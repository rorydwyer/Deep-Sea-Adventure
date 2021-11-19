export const DeepSeaAdventure = {
  setup: () => ({
    artifacts: getArtifactChips(),
  }),

  moves: {
    swimDown: (G, ctx, id) => {
      alert("swim down");
    },

    swimUp: (G, ctx, id) => {
      alert("swim up");
    },

    rollDice: (G, ctx, id) => {
      let dice = [];
      for (let i = 0; i < 2; i++) {
        dice.push(Math.floor(Math.random() * 3) + 1);
      }
      alert(dice);
    },

    grabArtifact: (G, ctx, id) => {},

    dropArtifact: (G, ctx, id) => {},

    endTurn: (G, ctx, id) => {},
  },
};

function getArtifactChips() {
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
