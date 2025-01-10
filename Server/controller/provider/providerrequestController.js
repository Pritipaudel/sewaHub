const express = require('express');
const ProviderRequest = require('../../model/provider/providerRequestSchema');
const Services = require('../../model/serviceModel'); // Import the Services model
const router = express.Router();

// POST /api/provider-request
router.post('/provider-request', async (req, res) => {
  try {
    const { serviceId, providerId, message } = req.body;

    // Validate required fields
    if (!serviceId || !providerId) {
      return res.status(400).json({ message: 'Service ID and Provider ID are required' });
    }

    // Create a new provider request
    const newProviderRequest = new ProviderRequest({
      service: serviceId,
      provider: providerId,
      message, // Optional message from provider
    });

    // Save the new provider request
    const savedProviderRequest = await newProviderRequest.save();

    // Find the corresponding service and update the 'requestedBy' field
    const service = await Services.findById(serviceId);
    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    // Add the provider request to the 'requestedBy' array in the service
    service.requestedBy.push(savedProviderRequest._id);

    // Save the updated service
    await service.save();

    return res.status(201).json({
      message: 'Provider request sent successfully and service updated',
      data: savedProviderRequest,
    });
  } catch (error) {
    console.error('Error sending provider request:', error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
