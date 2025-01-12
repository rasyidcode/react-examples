import { MouseEventHandler, ReactNode } from "react";
import "./AI_3_App.css";

function Button({
  onClick,
  children,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }: { movieName: string }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}`);
  }
  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading")}>Upload Image</Button>;
}

export default function App() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
