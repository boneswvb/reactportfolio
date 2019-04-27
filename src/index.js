import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import AddProjectsData from './AddProjectsData';
import { projectData } from './projectData';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AddProjectsData projectData={ projectData } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
