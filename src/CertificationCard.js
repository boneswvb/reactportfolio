import React from 'react';
import './certificateCard.css';

const CertificationCard = ({ image, alt }) => {
	return(
		<div className='tc'>
			<div className='certificateBox1'>
				<img alt={`${ alt }`} src={`${ image }`} />
			</div>
		</div>
	);
}

export default CertificationCard;