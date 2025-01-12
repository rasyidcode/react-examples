import "./AI_1_App.css";

export default function App() {
  return <Button />;
}

function Button() {
  return (
    <button
      onClick={function handleClick() {
        alert("You clicked me!");
      }}
    >
      Click me
    </button>
  );
}
