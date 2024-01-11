import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-black text-white text-center ">
      <h1 className="text-2xl">Resume Builder</h1>
      <nav className="text-xl">
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;
