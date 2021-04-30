import React from 'react';
import Avatar from '../img/avatar.png';
import './About.css';

export default function About() {
  return (
    <>
      <h2>About Us</h2>
      <div className="avatar">
        <div>
          <img src={Avatar} alt="avatar" width="100" />
          <p>Brandon</p>
        </div>
        <div>
          <img src={Avatar} alt="avatar" width="100" />
          <p>Benoit</p>
        </div>
        <div>
          <img src={Avatar} alt="avatar" width="100" />
          <p>Priscilia</p>
        </div>
        <div>
          <img src={Avatar} alt="avatar" width="100" />
          <p>Ornella</p>
        </div>
      </div>
    </>
  );
}
