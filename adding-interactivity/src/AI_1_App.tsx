import "./AI_1_App.css";

export default function App() {
  return <Button />;
}

function Button() {
  function handleClick() {
    alert("You clicked me!");
  }

  return <button onClick={handleClick}>Click me</button>;
}
