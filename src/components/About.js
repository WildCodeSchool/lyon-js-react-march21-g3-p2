import React from 'react';
import '../screens/Contact.css';
import Avatar from '../img/avatar.png';

export default function About() {
    return (
        <React.Fragment>
            <h2>About Us</h2>
            <div id="avatar">
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
            </div >
        </React.Fragment>
    );
}