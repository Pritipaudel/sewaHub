import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Role = () => {
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setUserRole(role);
    // Proceed to the registration form with the selected role
    navigate('/register', { state: { userRole: role } });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-8">
      {/* Role Cards */}
      <div className="flex space-x-8">
        <div
          onClick={() => handleRoleSelection('customer')}
          className="border-2 border-blue-500 rounded-lg p-8 cursor-pointer text-center hover:bg-blue-100 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-blue-700">Customer</h2>
          <p className="text-gray-600">Select this if you're looking for services.</p>
        </div>

        <div
          onClick={() => handleRoleSelection('provider')}
          className="border-2 border-green-500 rounded-lg p-8 cursor-pointer text-center hover:bg-green-100 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          <h2 className="text-2xl font-semibold text-green-700">Provider</h2>
          <p className="text-gray-600">Select this if you're providing services.</p>
        </div>
      </div>

      {/* Transparent Login Button */}
      <Link to="/login">
        <button className="px-6 py-3 text-lg border-2 border-green-700 text-green-700 rounded-full bg-transparent hover:bg-green-700 hover:text-white transition-all duration-300">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Role;
