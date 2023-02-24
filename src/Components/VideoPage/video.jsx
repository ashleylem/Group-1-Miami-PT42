import React, { useRef } from "react";
import "./video.css";
import { useContext, useState, useEffect } from "react";
import { Context } from "../../Store/appContext";
import { Link } from "react-router-dom";
import VideoImageThumbnail from "react-video-thumbnail-image";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const VideoControls = ({ videoData }) => {
  const video = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setFullscreen] = useState(false);
  const [isTheater, setTheater] = useState(false);
  const [isMiniPlayer, setMiniPlayer] = useState(false);
  const [volume, setVolume] = useState(1);

  const videoContainer = useRef();
  const apiImgUrl = "https://ashleylem.pythonanywhere.com/videos/";

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
    setMiniPlayer(!isMiniPlayer);
    if (isMiniPlayer) {
      document.exitPictureInPicture();
    } else {
      video.current.requestPictureInPicture();
    }
  }
  const handleVolumeChange = (event) => {
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
                {volume >= 0.5 ? (
                  <svg className="volume-high-icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z"
                    />
                  </svg>
                ) : (volume <= 0.5) & (volume > 0) ? (
                  <svg className="volume-low-icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z"
                    />
                  </svg>
                ) : (
                  <svg className="volume-muted-icon" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z"
                    />
                  </svg>
                )}
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
  const [categoryName, setCategoryName] = useState();


  const apiImgUrl = "https://ashleylem.pythonanywhere.com/videos/";

  async function settingVideo(categoryName = null) {
    const newInfo = await actions.get_all_uploads();
    const itemDetails = await Promise.all(
      newInfo.map(async (item) => {
        const detailResponse = await actions.product_info(item.product_id);
        return detailResponse;
      })
    );
    const userDetails = await Promise.all(
      newInfo.map(async (item) => {
        const detailResponse = await actions.get_info(item.userId);
        return detailResponse;
      })
    );
    const videos = newInfo.map((item, index) => ({
      ...item,
      product: itemDetails[index],
      user: userDetails[index],
    }));

    if (categoryName) {
      return videos.filter((video) =>
        video.product.category_name.includes(categoryName)
      );
    }

    return videos;
  }

  useEffect(() => {
    async function settingVideoInfo() {
      settingVideo(categoryName)
        .then((data) => setVideoInfo(data))
        .catch((error) => console.log(error));
    }
    settingVideoInfo();
  }, [categoryName]);

  console.log(videoInfo);

  return (
    <div className="main-video filters">
      <div class="container ">
        <div className="linksContainer rounded navbar d-flex justify-content-evenly shadow-sm  mt-3 ">
          <button className="filter-buttons" onClick={() => setCategoryName("Women")}>Women</button>
          <button className="filter-buttons" onClick={() => setCategoryName("Men")}>Men</button>
          <button className="filter-buttons" onClick={() => setCategoryName("Accessories")}>
            Accessories
          </button>
          <button className="filter-buttons" onClick={() => setCategoryName("Shoes")}>Shoes</button>
          <button className="filter-buttons" onClick={() => setCategoryName("Home-Decor")}>
            Home
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row row-cols-4">
          {videoInfo?.map((item, index) => {
            const productImgUrl =
              "https://ashleylem.pythonanywhere.com/product/images/";
            let imgUrl = item.picture;
            let array = imgUrl.split(",");
            const isMP4= item.filename.endsWith('.mp4');
            return (
              <div className=" mb-3 sub-main-video ">
                <div
                  className="previewImg "
                  data-bs-toggle="modal"
                  data-bs-target={"#userReview" + index}
                >
               
                 { isMP4? <VideoImageThumbnail
                    videoUrl={apiImgUrl + item?.filename}
                    className="review-thumbnail "

                    alt="my test video"
                  />:
                  <div className="react-video-thumbnail-image">
                <img className="review-thumbnail" src={productImgUrl + array[0]}></img></div>
                }
                  <div className="d-flex">
                    <img
                      className="review-img pe-2 pt-2"
                      src={productImgUrl + array[0]}
                    ></img>
                    <div>
                      <h5 className="mt-4 fw-semibold">{item?.name}</h5>
                      <p className="text-muted fs-6">
                        Certified Review{" "}
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          className="faCheckCircle"
                        />
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="modal fade"
                  id={"userReview" + index}
                  tabIndex="-1"
                  aria-labelledby="reviewModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-xl modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header flex-column">
                        <h2 className="modal-title">{item.product.name}</h2>
                        <h5>Submitted by: {item.user.name}</h5>
                      </div>
                      <div className="model-picture modal-body d-flex">
                        <div className=" d-flex">
                    
                            <img
                              className="rounded"
                              src={productImgUrl + array[0]}
                            ></img>
                          
                          <div className="ps-4 ">
                            <h4>Review for: {item.product.name}</h4>
                            <VideoControls
                              key={videoInfo.product_id}
                              videoData={item}
                            />:
                            <img src={apiImgUrl+item.filename }></img>
                          
                          }
                            <div className="rounded my-2 px-2 pb-2  review-user-info">

                              <p className="card-text">This is what {item.user.name} has to say!</p>
                              <p className="card-text">{item.description}</p>
                            </div>
                            <div>
                              <p className="details-link">
                                Interested in this product?{" "}
                                <Link
                                  className="rounded btn btn-outline-secondary"
                                  to={"/details/" + item.product.product_id}
                                >
                                  Check out more details here!
                                </Link>{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
