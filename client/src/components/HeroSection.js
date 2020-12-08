import React from 'react';
import '../styles/HeroSection.css';
import Video from '../videos/ohio.mp4';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1>Cincinnati Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      {/* <iframe width="100%" height="1000" src="https://www.youtube.com/embed/G8EUiH00BrU" autoPlay loop muted frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      <video autoPlay loop muted>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
}



