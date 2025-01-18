import { useState } from "react";
import "./AI_9_App.css";

function ColorSwitch({ onChangeColor }: { onChangeColor: () => void }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onChangeColor();
      }}
    >
      Change Color
    </button>
  );
}

export default function App() {
  const [clicks, setClicks] = useState(0);

  function handleClickOutside() {
    setClicks((c) => c + 1);
  }

  function getRandomColor() {
    const r = 150 + Math.round(100 * Math.random());
    const g = 150 + Math.round(100 * Math.random());
    const b = 150 + Math.round(100 * Math.random());
    return `rgb(${r}, ${g}, ${b})`;
  }

  function handleChangeColor() {
    const bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomColor();
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      onClick={handleClickOutside}
    >
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}
