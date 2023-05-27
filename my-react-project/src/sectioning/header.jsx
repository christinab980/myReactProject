import React from 'react';
import { NavLink } from 'react-router-dom';
import data from '../mocks/navs.json';

const Header = () => {

  const navs = data.map(nav => <NavLink key={nav.href} to={nav.href}>{nav.name}</NavLink>);

  return (
    <header>
      <div className="y-navs y-wrap">{navs}</div>
    </header>
  );
};

export default Header;
