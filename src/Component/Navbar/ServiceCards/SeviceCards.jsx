// src/ServiceCards.js
import React from "react";
import "./ServiceCards.css";
import { assets } from "../../../assets/assets";

const ServiceCards = () => {
  const cards = [
    { id: 1, title: "Web Development", image: assets.image1 },
    { id: 2, title: "Mobile App development", image: assets.image1 },
    { id: 3, title: "Dotenet php", image: assets.image1 },
    { id: 4, title: "Laravel", image: assets.image1 },
  ];

  return (
    <div className="service-cards-container">
      {cards.map((card) => (
        <div className="service-card" key={card.id}>
          <img src={card.image} alt={card.title} />
          <h2>{card.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
