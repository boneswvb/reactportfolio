import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import WrittenContent from './WrittenContent';
import AddProjectsData from './AddProjectsData';
import { projectData } from './projectData';
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
				<Scroll>
					<AddProjectsData projectData={ projectData } />
				</Scroll>
				
			</div>
		);
	}
}

export default App;