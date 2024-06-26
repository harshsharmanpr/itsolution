import React from 'react';
import ServiceCards from '../Navbar/ServiceCards/SeviceCards';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-light" style={{minHeight:"100vh",}}>
	<div className="card p-3 shadow" style={{maxWidth:"100%"}}>
		<h2 className="text-center p-3">Portfolio</h2>
		<nav>
			<div className="nav nav-tabs mb-3 justify-content-center" id="nav-tab" role="tablist">
				<button className="btn btn-default active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Website Portfolio</button>
				<button className="btn btn-default" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Mobile App Portfolio</button>
				{/* <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button> */}
			</div>
		</nav>
		<div className="tab-content p-3 border bg-light" id="nav-tabContent">
			<div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
      <PortfolioCard/>
			</div>
			<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <ServiceCards/>
			</div>
		
		</div>
	</div>
</div>
  );
}

export default Portfolio;
