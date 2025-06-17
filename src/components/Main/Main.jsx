import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt=""/>
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello Dev!!</span></p>
                <p>How Can I Help You Today!?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest Beautiful Places to Visit on a Upcoming Road Trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly Summarize this concept;Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>BrainStorm Team Bonding Activites For Our Work Retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Tell Me about React Js and React Native</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>

            <div className="main-bottom">
                <div className="search-box">
                   <input type="text" placeholder='Enter a Prompt here'/> 
                   <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon}     alt="" />
                    <img src={assets.send_icon}    alt="" />
                   </div>
                </div>
                <p className="bottom-info">
                    Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy and Gemini Apps
                </p>
            </div>
        </div>
      </div>
    </>
  )
}

export default Main
