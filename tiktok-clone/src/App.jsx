import Video from "./Video";

const data = [
  {
    channel: "CatMemes",
    description: "Cat Laughing",
    video: "src/assets/laughing-cat.mp4",
    song: "cat laugh - original",
    likesCount: "100",
    commentsCount: "1.2k",
    sharedCount: "3.2m",
  },
  {
    channel: "CatMemes",
    description: "Spinning Cat",
    video: "src/assets/spinning-cat.mp4",
    song: "Ai uiuoioi oioi - some chinese",
    likesCount: "20m",
    commentsCount: "2k",
    sharedCount: "2m",
  },
];

export default function App() {
  return (
    <div className="app">
      <div className="app__videos">
        {/* video */}
        {data.map((item) => (
          <Video
            key={item.video}
            video={item.video}
            channel={item.channel}
            description={item.description}
            song={item.song}
            likesCount={item.likesCount}
            commentsCount={item.commentsCount}
            sharedCount={item.sharedCount}
          />
        ))}
      </div>
    </div>
  );
}
