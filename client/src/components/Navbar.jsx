import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">Population Control System</Link>
        <div>
          <Link to="/login" className="text-white mr-4">Login</Link>
          <Link to="/signup" className="text-white">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;