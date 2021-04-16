import { NavLink } from 'react-router-dom';

import './Header.css';

import logo from '../img/logo.png';

const Logo = logo;

export default function Header() {
  return (
    <header>
      <nav>
        <img src={Logo} alt="logo" />
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/library">
              Library
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/contact">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
