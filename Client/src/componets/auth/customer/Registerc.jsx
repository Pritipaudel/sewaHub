import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Registerc = () => {
  const location = useLocation();
  const navigate= useNavigate()
  const { userRole } = location.state || {}; // Get the role from the state, defaulting to undefined if not found

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName =e.target.fullName.value;
    const userGmail = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword= e.target.confirmPassword.value;

    const userData = {
      fullName,
      userGmail,
      password,
      confirmPassword,
      role: userRole, // include the role in the data sent to the API
    };
console.log(userData);
    // Make API call here
    fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        alert('User registered sucessfully!!')
        navigate('/login')
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <div className="font-[sans-serif] bg-white md:h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <div className="max-md:order-1 p-4 bg-gray-50 h-full">
            <img
              src="https://readymadeui.com/signin-image.webp"
              className="lg:max-w-[90%] w-full h-full object-contain block mx-auto"
              alt="login-image"
            />
          </div>

          <div className="flex items-center p-6 h-full w-full">
            <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
              <div className="mb-12">
                <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Create an account</h3>
              </div>

              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter fullname"
                />
              </div>

              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Email</label>
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
              </div>

              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Password</label>
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>

              <div className="mt-6">
                <label className="text-gray-800 text-xs block mb-2">Confirm Password</label>
                <input
                  name="confirmPassword"
                  type="password"
                  required
                  className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
              </div>

              <div className="flex items-center mt-6">
                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
                <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                  I accept the <a href="javascript:void(0);" className="text-blue-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
                </label>
              </div>

              <div className="mt-12">
                <button type="submit" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                  Create an account
                </button>
                <p className="text-sm mt-6 text-gray-800">Already have an account? <Link to={'/login'} className="text-blue-500 font-semibold hover:underline ml-1">Login here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registerc;
