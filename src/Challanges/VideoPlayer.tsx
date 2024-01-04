import { useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";

import "./common.css";

const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const handleToggle = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="container">
      <h1>Video Player</h1>
      <article>
        <video
          poster="https://image.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/thumbnail.webp"
          ref={videoRef}
        >
          <source
            src="https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4"
            type="video/mp4"
          />
        </video>

        <div>
          <button
            title={isPlaying ? "Pause" : "Play"}
            onClick={handleToggle}
            className="buttonSmall"
          >
            {isPlaying ? <CiPause1 /> : <CiPlay1 />}
          </button>
        </div>
      </article>
    </section>
  );
};

export default VideoPlayer;
