import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import "./common.css";

const videoPlaybackContext = createContext({
  playingVideoId: 1,
  setPlayingVideoId: (value: number) => {},
});

function VideoPlaybackProvider({ children }: { children: ReactNode }) {
  const [playingVideoId, setPlayingVideoId] = useState(0);

  return (
    <videoPlaybackContext.Provider
      value={{ playingVideoId, setPlayingVideoId }}
    >
      {children}
    </videoPlaybackContext.Provider>
  );
}

function VideoItem({
  videoId,
  title,
  poster,
  src,
}: {
  videoId: number;
  title: string;
  poster: string;
  src: string;
}) {
  const { playingVideoId, setPlayingVideoId } =
    useContext(videoPlaybackContext);

  const videoRef = useRef<HTMLVideoElement>(null);

  const videoIsActive = videoId === playingVideoId;

  const handleTogglePlay = () => {
    if (!videoIsActive) {
      setPlayingVideoId(videoId);
    } else {
      setPlayingVideoId(0);
    }
  };

  useEffect(() => {
    if (videoIsActive) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [videoIsActive]);

  return (
    <li className="x-newsFeedli">
      <h3>{title}</h3>
      <article>
        <video poster={poster} ref={videoRef}>
          <source src={src} type="video/mp4" />
        </video>
        <button
          title={videoIsActive ? "Pause" : "Play"}
          onClick={handleTogglePlay}
          className="buttonSmall"
        >
          {videoIsActive ? <CiPause1 /> : <CiPlay1 />}
        </button>
      </article>
    </li>
  );
}

function NewsFeedList() {
  const videos = [
    {
      id: 1,
      title: "The React Way",
      poster: "https://react.gg/img/visualized-og2.jpg",
      src: "https://stream.mux.com/TbVCJiOghmISJgg4AznPfFHYRfiVoek8OJHF56Y01oR4/high.mp4",
    },
    {
      id: 2,
      title: "The History of the Web",
      poster: "https://react.gg/img/visualized-og1.jpg",
      src: "https://stream.mux.com/EwJPlEBa0046jGSVdYOnRsX9WnqHjytgIBXwkOt7LvVg/high.mp4",
    },
    {
      id: 3,
      title: "Rendering, Visualized",
      poster: "https://react.gg/img/visualized-og5.jpg",
      src: "https://stream.mux.com/VvQKMwPEOq5BUnc9eRN4sL5sUEZrHqWxNlCbpXSkE3I/high.mp4",
    },
  ];

  return (
    <div className="container">
      <div>
        <h1>News Feed</h1>
        <ul className="x-newsFeedUl">
          {videos.map((video) => (
            <VideoItem
              videoId={video.id}
              title={video.title}
              poster={video.poster}
              src={video.src}
              key={video.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

const NewsFeed = () => {
  return (
    <VideoPlaybackProvider>
      <NewsFeedList />
    </VideoPlaybackProvider>
  );
};

export default NewsFeed;
