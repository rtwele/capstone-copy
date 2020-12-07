import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Page & Component Imports
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import About from './pages/About'
import Contact from './pages/Contact'
// import NotFound from './pages/NotFound';
import AddAttraction from './pages/AddAttraction'
import Attraction from './pages/Attractions'
import SingleAttraction from './pages/SingleAttraction'

// styles
import './styles/App.css';
import './styles/homePage.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={HomePage}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/addattraction' component={AddAttraction} />
        <Route path='/viewattractions' component={Attraction} />
        <Route path='/singleattraction' component={SingleAttraction} />          
        {/* <Route component={NotFound}/> */}
      </Router>
    </div>
  );
}
}


