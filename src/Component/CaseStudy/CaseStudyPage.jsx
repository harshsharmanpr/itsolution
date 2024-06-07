import React from "react";
import { imagess } from "../../assets/assets";
import "./CaseStudyPage.css"; // Import the CSS file

export default function CaseStudyPage() {
  return (
    <div className="container">
      <div className="image">
        {imagess.map((item, index) => {
          return (
            <div key={index} className="image-item">
              <img src={item.img} alt="Not found" />
            </div>
          );
        })}
      </div>
      <div className="content">
        <h1>MyCheck-Up: Health and Fitness Application</h1>
        <h2>Project Challenge</h2>
        <p>
          Once just a WhatsApp group, I’MWOW aims to be an online fitness and
          nutrition community that helps people achieve their fitness goals.
        </p>
        <h2>Our Solution</h2>
        <p>
          Android and iOS App that comes with User-Friendly Admin and Coach
          Panels, allowing effortless input of diet plans, subscription
          tracking, video content integration, and more.
        </p>
        <p>
          The Application delivers premium fitness and health content, tailored
          diet plans, grocery list, personalized workout plans, notes from
          dieticians, tasks, affirmations, community engagement, and seamless
          chat and video calling with your personal dietician.
        </p>
      </div>
    </div>
  );
}
