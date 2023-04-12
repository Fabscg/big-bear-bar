import React from 'react';
import './App.css';
import './index.css'
import Header from
  './Components/Header/index.js';
import Cover from './Components/Cover';
import Menu from './Components/Menu/index.';
import Footer from './Components/Footer';
import Location from './Components/Location';
import CarouselFadeExample from './Components/Reviews';
import { BrowserRouter as Router } from "react-router-dom";
import { Carousel } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Cover />
        <Menu />
        <Location />
        <CarouselFadeExample />
        <Footer />
      </div >
    </Router>

  );
}

export default App;
