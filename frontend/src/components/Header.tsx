import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">[YourAppName]</h1>
        <nav>
          <Link to="/login" className="mr-4">Log In</Link>
          <Link to="/signup" className="bg-white text-blue-600 px-4 py-2 rounded">Sign Up</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;