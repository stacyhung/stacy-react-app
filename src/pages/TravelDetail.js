import React from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import tripData from "../data/tripData";
import "../css/trip.css";

function TravelDetail() {
  const { tripId } = useParams();

  // get the trip from the id
  const thisTrip = tripData.find((trip) => trip.id === tripId);

  // use Bootstrap Carousel Component
  return (
    <Carousel className="carousel">
      {thisTrip.img_src.map((img, index) => (
        <Carousel.Item interval={1500}>
          <img
            className="carousel-img d-block w-100"
            src={img}
            alt={`NZ-${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default TravelDetail;
