import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ id, projectNumber, projectName, image, hrefLink, alt, target, comment }) => {
	return(
			<div className='tc projectsBox'>
				<div id={`pj${id}`}>
					<h2 className='tc f6'> Project number {`${ projectNumber }`}</h2>
					<h2 className='tc f4'> {`${ projectName }`} </h2>
					<a alt={`${ alt }`} href={`${ hrefLink }`} target={`${ target }`}>
					<img alt={`${ alt }`} src={`${ image }`} /></a>
					<p>{ `${comment}` }</p>
				</div>
			</div>
		);
	};

export default ProjectsCard;