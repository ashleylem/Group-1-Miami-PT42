import React from 'react'
import './video.css'



export const Video = () => {
    return(
        <div className='main-video'>
            <div className='sub-main-video'>
                <div className='recently-added'>
                    Recently Added
                </div>
                <div className='item-picture'>
                    Item Picture
                    <div className='item-picture-wishlist'>
                        Wishlist
                    </div>
                </div>
                <div className='item-video'>
                    Item Video 
                    {/* need to learn how to add video with controls */}
                </div>
            </div>
        </div>
    )
}