import { ReactNode } from "react";
import "./AI_2_App.css";

function AlertButton({
  message,
  children,
}: {
  message: string;
  children: ReactNode;
}) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function App() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
