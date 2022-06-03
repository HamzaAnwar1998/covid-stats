import React from 'react';
import { Icon } from 'react-icons-kit';
import { mic } from 'react-icons-kit/feather/mic';
import { settings } from 'react-icons-kit/feather/settings';

const Navbar = () => (
  <nav className="navbox">
    <h2 className="logo">COVID-STATS</h2>
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
