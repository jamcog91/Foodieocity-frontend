import React from 'react';
import { useNavigate } from 'react-router-dom';
import video from './assets/pexels-roman-odintsov-5657049.mp4'

function CoverPage() {
    const navigate = useNavigate();
    return (
        <div>
            <video
            autoPlay
            loop
            >
              TESTING
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button onClick={() => navigate("restaurants")} className="enter"> Bon' Appetite! -> </button>
        </div>
    )
}
export default CoverPage 

