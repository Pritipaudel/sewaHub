import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProviderProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
const {id} =useParams();
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/provider/${id}`,
            {
                headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"), 
          }
              },
        );
        setProfile(response.data);
        setLoading(false);
      } catch (err) {
        setError('Could not fetch provider profile');
        setLoading(false);
      }
    };

    fetchProfile();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    profile && (
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mx-auto mt-10">
        <div className="flex items-center mb-6">
          <div className="flex-shrink-0">
            {/* Placeholder for profile image */}
            <div className="h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-600">
              {profile.userId.fullName[0]}
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-xl font-bold text-gray-900">{profile.userId.fullName}</h1>
            <p className="text-sm text-gray-600">{profile.userId.userGmail}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Experience</h2>
          <p className="text-gray-700">{profile.experienceDetails}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Expertise</h2>
          <ul className="list-disc list-inside text-gray-700">
            {profile.expertise.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Location</h2>
          <p className="text-gray-700">{profile.location}</p>
        </div>

        <div className="mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
          <p className="text-gray-700">{profile.phoneNumber}</p>
        </div>
      </div>
    )
  );
};

export default ProviderProfile;
