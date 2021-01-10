import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import tripData from "../data/tripData";
import "../css/trip.css";

function TravelDetail() {

    const { tripId } = useParams();

    // get the trip from the id
    const thisTrip = tripData.find(trip => trip.id === tripId);

    // get images for this trip

    // use Bootstrap Carousel Component (hard code each image for now, then apply map)
    return (
        <Carousel>
            {thisTrip.img_src.map((img, index) => (
                <Carousel.Item interval={1500}>
                    <img 
                        className="carousel-img d-block w-100" 
                        src={img}
                        alt={`NZ-${index}`}/>
                </Carousel.Item>
        ))}
        </Carousel>
    )
}

export default TravelDetail;