import React from 'react';
import Priscilia from '../img/priscilia.jpg';
import Benoit from '../img/benoit.jpeg';
import Ornella from '../img/ornella.jpg';
import Brandon from '../img/brandon.jpeg';
import './About.css';

export default function About() {
  return (
    <>
      <h2>About Us</h2>
      <div className="avatar">
        <div>
          <img src={Brandon} alt="avatar" width="100" />
          <p>Brandon</p>
        </div>
        <div>
          <img src={Benoit} alt="avatar" width="100" />
          <p>Benoit</p>
        </div>
        <div>
          <img src={Priscilia} alt="avatar" width="100" />
          <p>Priscilia</p>
        </div>
        <div>
          <img src={Ornella} alt="avatar" width="100" />
          <p>Ornella</p>
        </div>
      </div>
    </>
  );
}
