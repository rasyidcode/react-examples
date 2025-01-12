import { MouseEventHandler, ReactNode } from "react";
import "./AI_0_App.css";

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing")}
      onUploadImage={() => alert("Uploading")}
    />
  );
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

function Button({
  onClick,
  children,
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
}) {
  return <button onClick={onClick}>{children}</button>;
}
