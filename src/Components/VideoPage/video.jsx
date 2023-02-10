import React, { useRef } from "react";
import "./video.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../Store/appContext";
import { Link } from "react-router-dom";

const VideoControls = ({ videoData }) => {
  const video = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);
  const [isTheater, setTheater] = useState(false);
  const [isMiniPlayer, setMiniPlayer]=useState(false)
  const [volume, setVolume] = useState(1);

  const videoContainer = useRef();
  const apiImgUrl =
  "https://3000-ashleylem-group1miamipt-bbwjf6rw21b.ws-us86.gitpod.io/videos/";
  function togglePlayPause() {
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      video.current.pause();
    } else {
      video.current.play();
    }
  }
  function toggleFullscreen() {
    setFullscreen(!isFullscreen);
    if (isFullscreen) {
      document.exitFullscreen();
    } else {
      videoContainer.current.requestFullscreen();
    }
  }
  function toggleTheater() {
    setTheater(!isTheater);
  }
  function toggleMiniPlayerMode() {
    setMiniPlayer(!isMiniPlayer)
    if (isMiniPlayer) {
        document.exitPictureInPicture()
    } else {
        video.current.requestPictureInPicture()
    }
}
const handleVolumeChange = event => {
  setVolume(event.target.value);
};
  return (
    <div
      ref={videoContainer}
      className={
        isTheater ? "video-container-theater col" : "video-container col"
      }
    >
      <div className="video-controls-container">
        <div className="timeline-container">
          <div className="controls">
            <button className="play-pause-btn" onClick={togglePlayPause}>
              {isPlaying ? (
                <svg className="pause-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14,19H18V5H14M6,19H10V5H6V19Z"
                  />
                </svg>
              ) : (
                <svg className="play-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M8,5.14V19.14L19,12.14L8,5.14Z"
                  />
                </svg>
              )}
            </button>
            <div className="volume-container">
              
              <button className="mute-btn">
                {
                volume>= 0.5?  <svg className="volume-high-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                  />
                </svg>:
                volume<=0.5 & volume>0 ?<svg className="volume-low-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                  />
                </svg>: <svg className="volume-muted-icon" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                  />
                </svg>  }

              </button>
              <input
                className="volume-slider"
                type="range"
                min="0"
                max="1"
                step="any"
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
            <button onClick={toggleMiniPlayerMode} className="mini-player-btn">
              <svg viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"
                />
              </svg>
            </button>
            <button onClick={toggleTheater} className="theater-btn">
              {isTheater ? (
                <svg className="wide" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"
                  />
                </svg>
              ) : (
                <svg className="tall" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H5V8h14v8z"
                  />
                </svg>
              )}
            </button>
            <button onClick={toggleFullscreen} className="full-screen-btn">
              {isFullscreen ? (
                <svg className="close" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                  />
                </svg>
              ) : (
                <svg className="open" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <video
        ref={video}
        className="video"
        src={apiImgUrl + videoData.filename}
        type="video/mp4"
        fullscreen={isFullscreen}
        playing={isPlaying}
        volume={volume}
      ></video>
    </div>
  );
};

export const Video = () => {
  const { actions } = useContext(Context);
  const [videoInfo, setVideoInfo] = useState();

  useEffect(() => {
    async function get_video_data() {
      const new_video_info = await actions.get_user_videoInfo();
      setVideoInfo(new_video_info);
    }
    get_video_data();
  }, []);

  
  return (
    <div className="main-video">
      <div className="recently-added">Recently Added</div>

      {videoInfo?.map((item, index) => {
        return (
          <div className="sub-main-video row">
            <div className="item-picture col">
              <Link to={"/details/" + item.product_id}>
                <img src={"https://" + item?.picture} />
                <div className="item-picture-wishlist">Wishlist</div>
              </Link>
            </div>
            <VideoControls key={videoInfo.product_id} videoData={item} />
          </div>
        );
      })}
    </div>
  );
};
