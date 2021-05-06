import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import  Nav from './DBSMAZENCV/header';
import About from './DBSMAZENCV/About';
import reportWebVitals from './reportWebVitals';
import Home from './DBSMAZENCV/Home';
import Skill from './DBSMAZENCV/Skill';
import Concate from './DBSMAZENCV/Concate';
import Project from './DBSMAZENCV/Project';
import Mainnav from './DBSMAZENCV/mainnav';
ReactDOM.render(
  <React.StrictMode> 
     <div className='MainContaint' id='MainContaint'>
     <Nav/>
     <div className='Containt' >
      <Mainnav/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Concate/>
     </div>
     </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
