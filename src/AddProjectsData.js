import React from 'react';
import ProjectsCard from './ProjectsCard';

const AddProjectsData = ({ projectData }) => {
	return (
		<div>
			{
				projectData.map((items, i) => {
					return(<ProjectsCard 
						key={i}
						projectNumber={projectData[i].projectNumber}
						id={projectData[i].id}
						projectName={projectData[i].projectName}
						image={projectData[i].image}
					 />
					);
				})
			}
		</div>
	);
}
	export default AddProjectsData;