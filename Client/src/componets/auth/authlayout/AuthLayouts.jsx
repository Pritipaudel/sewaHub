import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthLayouts = ({ children, requiredRole }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = () => {
      // Get token and role from localStorage
      const token = localStorage.getItem('token');
      const role = localStorage.getItem('role'); // Assuming role is stored in localStorage

      if (!token) {
        navigate('/');
        return;
      }

      // Check role
      if (requiredRole && role !== requiredRole) {
        navigate('/'); // Redirect if the role does not match
        return;
      }

      setIsAuthenticated(true);
      setUserRole(role);
    };

    checkAuth();
  }, [requiredRole, navigate]);

  if (!isAuthenticated) {
    return <p>Loading...</p>; // Or any loading state you prefer
  }

  return <>{children}</>;
};

export default AuthLayouts;
