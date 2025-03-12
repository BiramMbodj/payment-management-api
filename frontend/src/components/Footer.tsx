import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>&copy; 2023 [YourAppName]. All rights reserved.</p>
      <div>
        <a href="/about" className="mr-4">About</a>
        <a href="/terms" className="mr-4">Terms</a>
        <a href="/contact">Contact</a>
      </div>
    </footer>
  );
};

export default Footer;