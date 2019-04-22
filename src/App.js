import React, { Component } from 'react';
import Header from './Header';
import Menu from './Menu';
import WrittenContent from './WrittenContent';
import ProjectsCard from './ProjectsCard';
import './App.css';

class App extends Component {
	render() {
		return(
			<div>
				<Header />
				<Menu />
				<WrittenContent />
				<ProjectsCard />
			</div>
		);
	}
}

export default App;