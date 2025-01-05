import { useEffect, useState } from "react";
import StoryTray from "./StoryTray";

let initialStories = [
  { id: 0, label: "Ankit's Story" },
  { id: 1, label: "Taylor's Story" },
];

export default function Story() {
  const [time, setTime] = useState(new Date());
  // eslint-disable-next-line no-unused-vars
  const [stories, setStories] = useState([...initialStories]);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  // HACK: Prevent the memory from growing forefer while you read docs.
  // We're breaking own rules here.
  if (stories.length > 100) {
    stories.length = 100;
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        textAlign: "center",
      }}
    >
      <h2>It is {time.toLocaleTimeString()} now</h2>
      <StoryTray stories={stories} />
    </div>
  );
}
