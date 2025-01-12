import { MouseEventHandler, ReactNode } from "react";
import "./AI_4_App.css";

function Button({
  onSmash,
  children,
}: {
  onSmash: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return <button onClick={onSmash}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert("Playing!")}>Play Movie</Button>
      <Button onSmash={() => alert("Uploading!")}>Upload Image</Button>
    </div>
  );
}
