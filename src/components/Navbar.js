import React from 'react';
import { Icon } from 'react-icons-kit';
import { mic } from 'react-icons-kit/feather/mic';
import { settings } from 'react-icons-kit/feather/settings';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbox">
    <h2>
      <Link to="/" className="link">COVID-STATS</Link>
    </h2>
    <ul className="list">
      <li className="item">
        <Icon icon={mic} size={18} />
      </li>
      <li className="item">
        <Icon icon={settings} size={18} />
      </li>
    </ul>
  </nav>
);

export default Navbar;
