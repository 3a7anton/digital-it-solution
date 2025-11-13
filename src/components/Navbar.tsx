import React from 'react';
import PillNav from './ui/PillNav';
import reactLogo from '../assets/react.svg';

const Navbar: React.FC = () => {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' }
    // { label: 'Contact', href: '/contact' }
  ];

  return (
    <PillNav 
      logo={reactLogo}
      logoAlt="RTech Lead Logo"
      items={navItems}
      baseColor="#000"
      pillColor="#fff"
      hoveredPillTextColor="#fff"
      pillTextColor="#000"
    />
  );
};

export default Navbar;