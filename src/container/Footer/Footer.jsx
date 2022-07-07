import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  
  
  return (
    <>
      <h2 className="head-text">Want to <span>Get In Touch?</span> Let's Connect</h2>

      <div className="app__footer-cards">
      <p className='p-text'>I'm always open to new opportunities. Send me an email and I'll do my best to get back to you as soon as I can.</p>

        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:savannahday99@gmail.com" className="p-text">savannahday99@gmail.com</a>
        </div>
      </div>
      
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);