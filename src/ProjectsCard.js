import React from 'react';
import './ProjectsCard.css';

const ProjectsCard = ({ id, projectNumber, projectName, image }) => {
	return(
			<div className='tc projectsBox'>
				<div>
					<h2 className='tc f6'> Project number {`${ projectNumber }`}</h2>
					<h2 className='tc f4'> {`${projectName}`} </h2>
					<img alt='Picuter of a calculator' src={`${image}`} />
					<h3>Short project Description 1</h3>
				</div>
			</div>
		);
	};

export default ProjectsCard;