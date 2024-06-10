// src/ServiceCards.js
import React from "react";
import "./portfolio.css";
import { assets } from "../../assets/assets";

const PortfolioCard = () => {
  const cards = [
    { id: 1, title: "Web Development", image: assets.zobox },
    { id: 2, title: "Mobile App development", image: assets.hawkeye },
    { id: 3, title: "Dotenet php", image: assets.rms },
    { id: 4, title: "Laravel", image: assets.texcare },
    { id: 5, title: "Laravel", image: assets.elevated },
    { id: 6, title: "Laravel", image: assets.lrp },
  ];

  return (
    <div className="service-cards-container">
      {cards.map((card) => (
        <div className="port-card" key={card.id}>
          <img src={card.image} alt={card.title} />
          {/* <h2>{card.title}</h2> */}
        </div>
      ))}
    </div>
  );
};

export default PortfolioCard;
