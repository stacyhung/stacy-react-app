import React from "react";
import profilePic from '../IMG_7200-EFFECTS.jpg';
// import profilePic from '../Iceland-Stacy-golden-circle2.jpg';
import '../css/Home.css'

function Home() {

    return (
        <>
            <section className="intro">
                <h1 className="section-title">Hi, I am <br /><strong>Stacy Hung</strong></h1>
                <h3 className="section-subtitle">Front-end Dev</h3>
                <img className="intro-img" src={profilePic} alt="me looking out at NZ" id="profile-pic" />
            </section>
            <p className="intro-content">I'm a bioinformatics scientist who recently discovered an untapped
            passion for web design and development. When I'm not coding, I can be found cycling on the North Shore,
            sipping on a matcha / tumeric latte, or coming up with an itinerary for my next big trip.
            Here's my outlet - enjoy!</p>
        </>

    )
}

export default Home;