import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import WrittenContent from './WrittenContent';
import AddProjectsData from './AddProjectsData';
import { projectData } from './projectData';
import Scroll from './Scroll';
import { certificationContent } from './certificationContent';
import AddCertificationContent from './AddCertificationContent';
import Form from './Form';
import Footer from './Footer';
import './App.css';

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<Menu />
				<WrittenContent />
				<Menu />
				<Scroll>
				<AddCertificationContent certificationContent={certificationContent} />
				</Scroll>
				<Menu />
				<h1>Projects</h1>
				<AddProjectsData projectData={ projectData } />
				<Form />
				<Footer />
			</div>
		);
	}
}

export default App;