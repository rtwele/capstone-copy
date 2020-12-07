import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

// Page & Component Imports
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
// import NotFound from './pages/NotFound';
import AddAttraction from './pages/AddAttraction'
<<<<<<< HEAD:src/App.js
import Art from './pages/Art'
import Sport from './pages/Sport'

=======
import Attraction from './pages/Attractions'
import SingleAttraction from './pages/SingleAttraction'
>>>>>>> 9de33acabc4c4fb8e716f012ee1d4feff06e9e05:client/src/App.js

// styles
import './styles/App.css';
import './styles/homepage.css';

export default class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/Contact' component={Contact}/>
        <Route path='/addattraction' component={AddAttraction} />
<<<<<<< HEAD:src/App.js
        <Route path='/Art' component={Art} />
        <Route path='/Sport' component={Sport} />

=======
        <Route path='/viewattractions' component={Attraction} />
        <Route path='/singleattraction' component={SingleAttraction} />          
>>>>>>> 9de33acabc4c4fb8e716f012ee1d4feff06e9e05:client/src/App.js
        {/* <Route component={NotFound}/> */}
      </Router>
    </div>
  );
}
}


