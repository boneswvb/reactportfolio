import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import WrittenContent from './WrittenContent';
import AddProjectsData from './AddProjectsData';
import { projectData } from './projectData';
import ClassForm from './ClassForm';
import Footer from './Footer';
import Scroll from './Scroll';
import './App.css';

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<Menu />
				<WrittenContent />
				<Menu />
				<h1>Projects</h1>
				<Scroll>
				<AddProjectsData projectData={ projectData } />
				</Scroll>
				<Menu />
				<ClassForm />
				<Footer />
			</div>
		);
	}
}

export default App;