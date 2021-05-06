import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div>
      <div className="heroContainer"> </div>
      <div className="catchphraseContainer">
        <h2>
          "Le seul vrai lecteur, c'est le lecteur pensif. C'est à lui que ce
          livre est adressé."
        </h2>
        <p> Victor Hugo</p>
      </div>
    </div>
  );
}
