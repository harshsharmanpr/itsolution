import React from 'react'
import "./CloudDevelopment.css";
import { assets } from '../../assets/assets';



function CloudDevelopment() {
  return (
<>
<div className='clouddevelopment_page'>
    <div className='clouddevelopment_section'>
        <h4 className='clouddevelopment_section_heading'>  Cloud & DevOps Solutions We Offer</h4>
        <p className='clouddevelopment_section_para'> Delivering exponential value to enterprises by highlighting their app across the globe. </p>
    </div>

    <div className="clouddevelopment_card">
  <div className="row_clouddevelopment_card">
    <div className="col_clouddevelopment_card">
    <img  src={assets.standard_quality}  className="col_clouddevelopment_card_img" alt="col_clouddevelopment_card_img"/>
    <p className='col_clouddevelopment_card_para'> Assessment & Planning</p>        
     </div>
    <div className="col_clouddevelopment_card">
    <img  src={assets.process_implementation}  className="col_clouddevelopment_card_img" alt="col_clouddevelopment_card_img"/>
    <p className='col_clouddevelopment_card_para'>Process Implementation</p>        
     </div>
    <div className="col_clouddevelopment_card">
    <img  src={assets.programming_background}  className="col_clouddevelopment_card_img" alt="col_clouddevelopment_card_img"/>
    <p className='col_clouddevelopment_card_para'>Process Automation</p>
    </div>
    <div className="col_clouddevelopment_card">
    <img  src={assets.standard_quality}  className="col_clouddevelopment_card_img" alt="col_clouddevelopment_card_img"/>
    <p className='col_clouddevelopment_card_para'> Security Integration</p>
    </div>
  </div>
  </div>

<div className='Cloud_DevOps_section'>
<h4 className='Cloud_DevOps_section_heading'> Our Process to Cloud & DevOps </h4>

</div>

</div>
    


    
</>
  )
}

export default CloudDevelopment

