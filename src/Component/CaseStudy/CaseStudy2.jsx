import React from 'react'
import { imagess2 } from '../../assets/assets';

export default function CaseStudy2() {
  return (
    <div className="container">
        <div className="image">
        {imagess2.map((item, index) => {
          return (
            <div key={index} className="image-item">
              <img  className ="h=4"src={item.img} alt="Not found" />
            </div>
          );
        })}
      </div>
      
      <div className="content">
        <h1>Zobox: Zobox Dashboard</h1>
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
       
     
    </div>
  )
}
