import React from "react";
import profilePic from '../IMG_7200-EFFECTS.jpg';
import '../css/Home.css'

function Home() {

    return (
        <div className="intro">
            <h1 className="section-title">Hi, I am <strong>Stacy Hung</strong></h1>
            <h3 className="section-subtitle">Aspiring Front-end Developer</h3>
            <img className="intro-img" src={profilePic} alt="me looking out at NZ" id="profile-pic" />
        </div>

    )
}

export default Home;