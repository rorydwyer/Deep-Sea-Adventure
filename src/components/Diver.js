import { useEffect, useState } from "react";

const Diver = ({ player }) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    // Get player position based on depth
    if (player.depth === -1) {
      let element = document.getElementById(`submarine`);
      setPosition({ top: element.offsetTop + "px", left: element.offsetLeft + "px" });
    } else {
      let element = document.getElementById(`artifact-${player.depth}`);
      setPosition({ top: element.offsetTop + "px", left: element.offsetLeft + "px" });
    }
  }, [player]);

  return <div className={`w-6 h-6 rounded-full border-2 border-white shadow absolute player-${player.id}`} style={position}></div>;
};

export default Diver;
