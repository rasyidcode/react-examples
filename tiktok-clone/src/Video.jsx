/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

export default function Video({ video }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        loop
        onClick={() => {
          if (playing) {
            videoRef.current.pause();
          } else {
            videoRef.current.play();
          }
          setPlaying(!playing);
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
      {/* footer */}
      <div className="videoFooter">
        <div className="videoFooter__text">
          <h3>@channel</h3>
          <p>description</p>
          <div className="videoFooter__ticker">
            <div>MusicIcon</div>
            <div>Ticker</div>
          </div>
        </div>
        <img
          className="videoFooter__record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="Record"
        />
      </div>
      {/* sidebar */}
    </div>
  );
}
