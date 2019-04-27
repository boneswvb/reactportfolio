import React from 'react';
import CertificationCard from './CertificationCard';

const AddCertificationContent = ({ certificationContent }) => {
	return (
		<div>
			{
				certificationContent.map((items, i) => {
					return(<CertificationCard 
						key={i}
						id={certificationContent[i].id}
						image={certificationContent[i].image}
						alt={certificationContent[i].alt}
						 />
					);
				})
			}
		</div>
	);
}
	export default AddCertificationContent;