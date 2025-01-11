/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import {
  Favorite,
  FavoriteBorder,
  Message,
  MusicNote,
  Share,
} from "@mui/icons-material";
import Marquee from "react-fast-marquee";

export default function Video({
  channel,
  description,
  video,
  song,
  likesCount,
  commentsCount,
  sharedCount,
}) {
  const [playing, setPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
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
          <h3>@{channel}</h3>
          <p>{description}</p>
          <div className="videoFooter__ticker">
            <MusicNote className="videoFooter__icon" />
            <Marquee>{song}</Marquee>
          </div>
        </div>
        <img
          className="videoFooter__record"
          src="https://static.thenounproject.com/png/934821-200.png"
          alt="Record"
        />
      </div>
      {/* sidebar */}
      <div className="videoSidebar">
        <div className="videoSidebar__button">
          {liked ? (
            <Favorite fontSize="large" onClick={() => setLiked(!liked)} />
          ) : (
            <FavoriteBorder fontSize="large" onClick={() => setLiked(!liked)} />
          )}
          <p>{likesCount}</p>
        </div>
        <div className="videoSidebar__button">
          <Message fontSize="large" />
          <p>{commentsCount}</p>
        </div>
        <div className="videoSidebar__button">
          <Share fontSize="large" />
          <p>{sharedCount}</p>
        </div>
      </div>
    </div>
  );
}
