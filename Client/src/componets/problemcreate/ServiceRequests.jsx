import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceRequests = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const sendProviderRequest = async (serviceId) => {
    try {
      const providerId = localStorage.getItem('id'); // Replace this with the actual logged-in provider's ID
      const message = 'I am interested in providing this service.'; // Optional message from the provider
      const response = await axios.post('http://localhost:8000/provider-request', {
        serviceId,
        providerId,
        message,
      });
  
      if (response.status === 201) {
        alert('Provider request sent successfully');
      }
    } catch (error) {
      console.error('Error sending provider request:', error);
      alert('Failed to send provider request');
    }
  };
  


  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:8000/allrequest'); // Replace with your API endpoint
        setServices(response.data.data); // Assuming your response has a data object containing the array of services
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-10 px-6 bg-gray-50 dark:bg-gray-900 w-screen min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Services Request Posted by Service seekers.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service._id}
              className="flex flex-col justify-between px-5 py-4 bg-white dark:bg-gray-800 shadow rounded-lg h-full" // Added h-full to stretch the card to fill its grid cell
            >
              <div>
                <div className="flex mb-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQApwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcDBAUCAf/EADgQAAICAQIDBAcFCAMAAAAAAAABAgMEBREGIUESMVFxEyIyUmHB0VNigZGxFCNyk6Gy4fAzQmP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALSABpkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY8i+rGqlbkWRrrj3ykyM53GVcW44OPKa6TtfZ38kBKgQVcYah2t3VQ14bP6nVwOMMe2ShnVSo35ekj60fx6oCSg81yjZCM65RnGS3Ti90z0AAAAAAAAAAAAAAAAAAAAxZN9WNj2X3y7NcI7yZlIjxznPenAg9l/yWfHpFfqwOHrOrX6pkuc240xf7qtd0V9TnAFQAAHY4e1qzTL1XbJyxJv14vn2X7yLCjJTipxalGSTTXc0VKTngrOeRgTxbJbyofqv7j+j3IqRAAAAAAAAAAAAAAAAAAAVxxPY7Ndym/+slFfgkWOVvxNDsa7l/Gaf9EBzAAaQAAA7/BVjhrEodJ1STXlscA7/BUO1rLfu1S+RlU8AAAAAAAAAAAAAAAAAADu5kI45xXVqFWQl6lsOzv96P8Agm5o6zp0NUwJ483tL2oS92S6gVkDLk41uJfOjJg4WQezi/l4oxFAABMCYcCYrVeTlyXJ/u4/Hbm/kRnTsC/UcqOPjxbb9qW3KC8WWVg4teDiVY1O6hXHbzfVvzIrO+8AAAAAAAAAAAAAAAAAAAABp6jpmJqVXYyqu017M09pR8mRzJ4Ll2t8TNTj7t0Of5r6EqvyKMePayLa614zkkc23iXSKns8vtv/AMq5S+QVHlwdn787sfb+J/Q3MXgtJ75mY5L3KYbf1f0N9cWaTv7d38lmxTxHpNz2jmRi/C2Lj+qCN3CwsbBpVWLUq4d78W/i+psHiqyu2PapnCcfGDTPYUAAQAAAAAAAAAAAAAADna1q1OlYvpJrt2y5V1p+18fIDYz87GwKHdlWqEOnjLyXUh+pcWZV7lXgr9nq7u33zf0OLn5uRn5DvybHKb5LwivBLoa4Hu6yy6bnbZKcn1k92eACoAAYMuPkXY01PHusqkusHsSPTOLrYNV6lD0kPtYLaS811IuARa2NkU5VMbseyNlcu6UXuZSstK1TI0vI9LRLeL9ut+zNf71LC03Po1LEjkY75PlKL74PwZFbYAAAAAAAAAAAADBm5VWFi2ZF72hWt3t1+H4laalnXajlzyb360nsku6K8Ed/jfUHZkV4Fb9StduzbrJ9y/BfqRcAACpQAFAAAAAAOhoeqWaVmRtW7plyth7y+qOeCVYtiuyFtcbK5KUJJOMl1R7IvwTqDsx7MCx+tV61f8PVfn+pKCAAAAAAAAAeZyjCMpS5KK3b+HU9HP1+10aJnTjyfonFPw35fMCuszIll5V2RN7u2blz+JhALCgAKgAAAAAAAAACUjoaDlfser41re0e32J+T5FllSNtLdPZ9GWvj2emx6rftK4y/NbhWQAEAAAAAAORxa2uH8rb7v8AcgAK7ABYgACgAAAAAAAAAAD7i0NHe+k4Tf2EP7UfASkbgAI0AAI//9k=" // Placeholder profile image, replace if necessary
                    alt="User Profile"
                  />
                  <div className="ml-2 mt-0.5">
                    <span className="block font-medium text-base leading-snug text-black dark:text-gray-100">
                      {service.postedBy.fullName}
                    </span>
                    <span className="block text-sm text-gray-500 dark:text-gray-400 font-light leading-snug">
                      {new Date(service.createdAt).toLocaleDateString()} at {new Date(service.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
                <p className="text-gray-800 dark:text-gray-100 leading-snug md:leading-normal mb-4">
                  {service.ServiceDescription}
                </p>
                <div className="text-sm text-gray-500 dark:text-gray-400 font-light mb-4">
                  <p>Location: {service.location}</p>
                  <p>Service Category: {service.serviceCategory}</p>
                  <p>Service Charge: {service.serviceCharge}</p>
                </div>
              </div>
              <button
  className="mt-auto w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-800"
  onClick={() => sendProviderRequest(service._id)}
>
  Send Provider Request
</button>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceRequests;
