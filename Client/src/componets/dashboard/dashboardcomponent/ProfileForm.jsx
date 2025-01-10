import { useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import axios from 'axios';

export default function ProfileForm() {
  const { id } = useParams(); // Access the id from URL parameters
  const [formData, setFormData] = useState({
    phoneNumber: '', // Corrected field name
    expertise: '',
    experienceDetails: '',
    location: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Basic validation to ensure all required fields are filled
    const { phoneNumber, expertise, experienceDetails, location } = formData;
    console.log(formData);
    if (!phoneNumber || !expertise || !experienceDetails || !location) {
      alert("Please fill in all required fields: phone number, expertise, experience details, and location.");
      return;
    }

   

    try {
       await axios.post(`http://localhost:8000/createProvider/${id}`, formData, {
          headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"), 
    }
        },
        
      );
      console.log('Profile submitted successfully:',formData);
      // Optionally reset form or provide feedback to the user
    } catch (error) {
      console.error('Error submitting profile:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly, so be careful what you share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

            <div className="col-span-full">
              <label htmlFor="expertise" className="block text-sm font-medium leading-6 text-gray-900">
                Expertise
              </label>
              <div className="mt-2">
                <input
                  id="expertise"
                  name="expertise"
                  type="text"
                  placeholder="Enter your expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="experienceDetails" className="block text-sm font-medium leading-6 text-gray-900">
                Experience Details
              </label>
              <div className="mt-2">
                <textarea
                  id="experienceDetails"
                  name="experienceDetails"
                  rows={4}
                  placeholder="Describe your experience"
                  value={formData.experienceDetails}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="location" className="block text-sm font-medium leading-6 text-gray-900">
                Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Enter your location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text" // Changed input type to text
                  placeholder="Enter your phone number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
