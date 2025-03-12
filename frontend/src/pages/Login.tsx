import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email or Phone</label>
            <input type="text" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4 text-right">
            <Link to="/forgot-password" className="text-blue-600">Forgot Password?</Link>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Log In</button>
        </form>
        <p className="mt-4 text-center">
          No account? <Link to="/signup" className="text-blue-600">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;