import React from "react";
import tripData from "../data/tripData";
import { Link } from "react-router-dom";
import "../css/hover-effect.css"

function Travelling() {

    const trips = tripData.map(trip => (
        <Link key={trip.id} to={`/travelling/${trip.id}`} className="hover-link">
            <figure className="effect-jazz">
                <img src={trip.img_cover} alt={trip.img_alt} />
                <figcaption>
                    <h2>{trip.name}</h2>
                    <p>{trip.desc}</p>
                </figcaption>
            </figure>
        </Link >

    ))

    return (
        <div className="grid">
            {trips}
        </div>
    )
}

export default Travelling;