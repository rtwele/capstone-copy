import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Page & Component Imports
import Navbar from './components/Navbar'
import HomePage from './pages/homePage'
import About from './pages/About'
import Contact from './pages/contact'
// import NotFound from './pages/NotFound';
import AddAttraction from './pages/AddAttraction'

// styles
import './styles/App.css';
import './styles/homePage.css';
import './styles/HeroSection.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/addattraction' component={AddAttraction} />
        {/* <Route component={NotFound}/> */}
      </Router>
    </div>
  );
}
}


