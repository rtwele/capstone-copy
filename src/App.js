import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

<<<<<<< HEAD
=======

>>>>>>> 60e54bba71a7068cdf0f768190fbf9df442b3b0b
// Page & Component Imports
import Navbar from './components/Navbar'
import HomePage from './pages/homePage'
import About from './pages/About'
<<<<<<< HEAD
import Contact from './pages/contact'
=======
import Contact from './pages/Contact'
>>>>>>> 60e54bba71a7068cdf0f768190fbf9df442b3b0b
// import NotFound from './pages/NotFound';
import AddAttraction from './pages/AddAttraction'

// styles
import './styles/App.css';
import './styles/homePage.css';
<<<<<<< HEAD
import './styles/HeroSection.css';
=======
>>>>>>> 60e54bba71a7068cdf0f768190fbf9df442b3b0b

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


