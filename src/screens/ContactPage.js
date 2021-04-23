import './Contact.css';
import React from 'react';
import Contact from '../components/Contact.js';
import About from '../components/About.js';

export default function ContactPage() {
  return (
    <React.Fragment>
      <div>{About}</div>
      <div>{Contact}</div>
    </React.Fragment>
  );
}
