import React, { useEffect, useState } from 'react';
import Info from './component/Info';
import ServiceRequests from '../problemcreate/ServiceRequests';
import WhyChooseSajhaSewa from './component/WhyChooseUs';
import Contact from './component/Contact';
import Frequentq from './component/Frequentq';
import ServiceRequest from '../problemcreate/ServiceRequest';
import Landing from './Landing';
import Footer from '../common/Footer';

const Home = () => {
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Get the role and authentication status from localStorage when the component mounts
  useEffect(() => {
    const storedRole = localStorage.getItem('role');
    const token = localStorage.getItem('token'); // Check for token to determine if authenticated
    setRole(storedRole);
    setIsAuthenticated(!!token); // Set authenticated state based on the presence of a token
  }, []);

  return (
    <>
      {!isAuthenticated ? (
        // For unauthenticated users
        <>
          <Landing />
          <Info />
          <WhyChooseSajhaSewa />
          <Frequentq />
          <Contact/>
          <Footer />
        </>
      ) : (
        // For authenticated users (either provider or customer)
        <>
          {role === 'provider' && <ServiceRequests />}
          {role === 'customer' && <ServiceRequest />}
         
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
