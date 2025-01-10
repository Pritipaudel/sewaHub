import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CustomerProfile = () => {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/customer-requests/${id}`);
        setCustomerData(response.data.data); // Assuming services are stored in `data`
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch customer data");
        setLoading(false);
      }
    };

    fetchCustomerData();
  }, [id]);

  const handleEdit = (serviceId) => {
    // Handle the edit functionality here
    console.log("Edit service with ID:", serviceId);
  };

  const handleDelete = (serviceId) => {
    // Handle the delete functionality here
    console.log("Delete service with ID:", serviceId);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold mb-4 text-gray-800">Customer Profile</h1>

      {/* Posted Services */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Posted Services</h2>
        {customerData?(
          customerData.map((service) => (
            <div key={service._id} className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800">{service.serviceCategory}</h3>
              <p className="mt-2 text-gray-700">{service.ServiceDescription}</p>
              <p className="mt-1 text-gray-600">Location: {service.location}</p>
              <p className="mt-1 text-gray-600">Service Charge: ${service.serviceCharge}</p>

              {/* Edit and Delete Buttons */}
              <div className="mt-4 flex space-x-4">
                <button
                  onClick={() => handleEdit(service._id)}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(service._id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>

              {/* Provider Requests Table */}
              {service.requestedBy && service.requestedBy.length > 0 ? (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700">Provider Requests</h4>
                  <table className="min-w-full table-auto bg-white mt-4 border border-gray-200">
                    <thead>
                      <tr>
                        <th className="px-4 py-2 border">Service Request ID</th>
                        <th className="px-4 py-2 border">Message</th>
                        <th className="px-4 py-2 border">View Provider Profile</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.requestedBy.map((request) => (
                        <tr key={request._id}>
                          <td className="px-4 py-2 border">{request._id}</td>
                          <td className="px-4 py-2 border">{request.message}</td>
                          <td className="px-4 py-2 border text-blue-500">
                            <Link to={`/provider-profile/${request.provider}`}>
                              View Profile
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500 mt-2">No provider requests for this service yet.</p>
              )}
            </div>
          ))
        ) : (
          <p className="text-gray-500">No services posted by this customer yet.</p>
        )}
      </div>
    </div>
  );
};

export default CustomerProfile;
