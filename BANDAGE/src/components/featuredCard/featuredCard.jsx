import './featuredCard.css'

import React from 'react'

export default function FeaturedCard() {
  return (
    <>
        <div className='featured-card'>
            <div className='featured-card1'>
                <p id='featured-active'>Google</p> <p>Trend</p> <p>New</p>
            </div>
            <h4>Loudest à la Madison #1 (L'integral)</h4>
            <p id='diff-p'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className='featured-card2'>
                <p><img src="icons/clock.svg" alt="" />22 April 2021</p>
                <p><img src="icons/comment.svg" alt="" />10 comments</p>
            </div>
            <a href="">Learn More<img src="icons/learnmore.svg" alt="" /></a>
        </div>
    </>
  )
}
