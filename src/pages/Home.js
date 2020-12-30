import React from "react";
import profilePic from '../IMG_7200-EFFECTS.jpg';
// import profilePic from '../Iceland-Stacy-golden-circle2.jpg';
import '../css/Home.css'

function Home() {

    return (
        <section className="intro">
            <h1 className="section-title">Hi, I am <br /><strong>Stacy Hung</strong></h1>
            <h3 className="section-subtitle">Front-end Dev</h3>
            <img className="intro-img" src={profilePic} alt="me looking out at NZ" id="profile-pic" />
        </section>

    )
}

export default Home;