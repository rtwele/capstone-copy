import React from 'react';
import '../styles/HeroSection.css';
import Video from '../videos/ohio.mp4';
import {Button} from '../styles/Button.css';

export const HeroSection = () => {
  return (
    <div className='hero-container'>
      <h1>Cincinnati Adventure Awaits</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--test'
          buttonSize='btn--medium'
        >
        Tours Here
        </Button>
      
      </div>
     
      <video autoPlay loop muted>
        <source src={Video} type='video/mp4' />
      </video>
    </div>
  );
}



