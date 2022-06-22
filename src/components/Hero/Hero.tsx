import React, { FC } from 'react';
import './Hero.sass';

const Hero: FC = () => {
  
  return (
    <div className='hero'>
      <div className="content">

        <p>Call Us</p>
        <p>+38 (095) 50 80 100</p>
        <p>Becouse Money</p>
        <p>Doesn't come with instructions</p>
        <a href="/"><button className='button'>Free Consultation</button></a>

      </div>
    </div>
  )
}

export default Hero;