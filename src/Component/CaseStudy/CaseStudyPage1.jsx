import React from "react";
import { imagess, imagess1 } from "../../assets/assets";
import "./CaseStudyPage1.css"; // Import the CSS file

export default function CaseStudyPage1() {
  return (
    <div className="container">
      <div className="content">
        <h1>MealSurplus: Meal Surplus Portal</h1>
        <h2>Project Challenge</h2>
        <p>
          Struggling with Tedious Loan Applications and Lack of a Centralized
          System Leading to Unorganized Customer Complaints and Requests
        </p>
        <h2>Our Solution</h2>
        <p>
          Struggling with Tedious Loan Applications and Lack of a Centralized
          System Leading to Unorganized Customer Complaints and Requests
        </p>
        <p>
          An user-friendly customer portal, empowering users to gain
          comprehensive insights into their applications and effortlessly track
          and address any concerns, ensuring a more transparent and satisfying
          experience. We’ve not only made the application process easy to
          complete and track but also integrated third-party APIs. Now, with the
          seamless integration of APIs, fetching data from your PAN, Aadhar, and
          more is a breeze, enhancing the efficiency and speed of the entire
          application journey
        </p>
      </div>
      <div className="image">
        {imagess1.map((item, index) => {
          return (
            <div key={index} className="image-item">
              <img src={item.img} alt="Not found" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
