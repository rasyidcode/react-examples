import Video from "./Video";

const data = ["src/assets/laughing-cat.mp4", "src/assets/spinning-cat.mp4"];

export default function App() {
  return (
    <div className="app">
      <div className="app__videos">
        {/* video */}
        {data.map((video) => (
          <Video key={video} video={video} />
        ))}
      </div>
    </div>
  );
}
