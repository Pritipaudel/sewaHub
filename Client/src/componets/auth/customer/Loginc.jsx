import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Loginc = () => {
  const [userGmail, setUserGmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      userGmail,
      password,
    };

    console.log(userData);

    try {
      const response = await axios.post('http://localhost:8000/login', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
console.log(response);
      // Assuming the response contains message, role, and token
      const { message, role, token,userId } = response.data;
     

      // Store role and token in localStorage
      localStorage.setItem('role', role);
      localStorage.setItem('token', token);
      localStorage.setItem('id', userId);

      // Navigate to home page after successful login
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      // Check if error response exists to show backend error message
      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Login failed. Please try again.'}`);
      } else {
        alert('Error: Unable to connect to the server. Please try again later.');
      }
    }
  };

  return (
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
              <h3 className="text-blue-500 md:text-3xl text-2xl font-extrabold max-md:text-center">Login to your account</h3>
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Email</label>
              <input
                value={userGmail}
                onChange={(e) => setUserGmail(e.target.value)}
                type="email"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter email"
              />
            </div>

            <div className="mt-6">
              <label className="text-gray-800 text-xs block mb-2">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                className="w-full bg-transparent text-sm border-b border-gray-300 focus:border-blue-500 px-2 py-3 outline-none"
                placeholder="Enter password"
              />
            </div>

            <div className="flex items-center mt-6">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 rounded" />
              <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                Remember me
              </label>
            </div>

            <div className="mt-12">
              <button type="submit" className="w-full py-3 px-6 text-sm tracking-wider font-semibold rounded-md bg-blue-600 hover:bg-blue-700 text-white focus:outline-none">
                Login
              </button>
              <p className="text-sm mt-6 text-gray-800">Don't have an account? <Link to={"/register"} className="text-blue-500 font-semibold hover:underline ml-1">Register here</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginc;
