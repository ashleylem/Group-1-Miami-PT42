import React from 'react'
import './video.css'



export const Video = () => {
    const video = () => {

    }
    return (
        <div className='main-video'>
            <div className='recently-added'>
                Recently Added
            </div>
            <div className='sub-main-video'>
                <div className='item-picture' src=''>
                    Item Picture
                    <div className='item-picture-wishlist'>
                        Wishlist
                    </div>
                </div>
                <div className='video-contianer paused'>
                    <div className="video-controls-container">
                        <div className="timeline-container">
                            <div className="controls">
                                <button className="play-pause-btn">
                                    Play
                                </button>
                            </div>
                        </div>
                    </div>
                    <video className="video-js" controls src="/src/Components/VideoPage/Fuego_de_Refineria.mp4" >
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank">
                                supports HTML5 video
                            </a>
                        </p>
                    </video>
                    <script src="https://vjs.zencdn.net/7.21.1/video.min.js"></script>
                </div>
            </div>
            <div className='sub-main-video'>
                <div className='item-picture'>
                    Item Picture
                    <div className='item-picture-wishlist'>
                        Wishlist
                    </div>
                </div>
                <div className='video-contianer paused'>
                    <div className="video-controls-container">
                        <div className="timeline-container">
                            <div className="controls">
                                <button className="play-pause-btn">
                                    Play
                                </button>
                            </div>
                        </div>
                    </div>
                    <video className="video-js" controls src="/src/Components/VideoPage/Fuego_de_Refineria.mp4" >
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank">
                                supports HTML5 video
                            </a>
                        </p>
                    </video>
                    <script src="https://vjs.zencdn.net/7.21.1/video.min.js"></script>
                </div>
            </div>
            <div className='sub-main-video'>
                <div className='item-picture'>
                    Item Picture
                    <div className='item-picture-wishlist'>
                        Wishlist
                    </div>
                </div>
                <div className='video-contianer paused'>
                    <div className="video-controls-container">
                        <div className="timeline-container">
                            <div className="controls">
                                <button className="play-pause-btn">
                                    Play
                                </button>
                            </div>
                        </div>
                    </div>
                    <video className="video-js" controls src="/src/Components/VideoPage/Fuego_de_Refineria.mp4" >
                        <p className="vjs-no-js">
                            To view this video please enable JavaScript, and consider upgrading to a
                            web browser that
                            <a href="https://videojs.com/html5-video-support/" target="_blank">
                                supports HTML5 video
                            </a>
                        </p>
                    </video>
                    <script src="https://vjs.zencdn.net/7.21.1/video.min.js"></script>
                </div>
            </div>
        </div>
    )
}