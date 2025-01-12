import { MouseEventHandler, ReactNode } from "react";
import "./AI_4_App.css";

function Button({
  onClick,
  children,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>;
}

function Toolbar({
  onPlayMovie,
  onUploadImage,
}: {
  onPlayMovie: MouseEventHandler<HTMLButtonElement>;
  onUploadImage: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
}

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading!")}
    />
  );
}
