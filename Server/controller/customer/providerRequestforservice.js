

const Services = require('../../model/serviceModel'); // Adjust the path as necessary
const ProviderRequest = require('../../model/provider/providerRequestSchema'); // Adjust the path as necessary

exports.getUserServices = async (req, res) => {
  try {
    const userId = req.params.userId; // Get the user ID from the request parameters

    // Fetch services posted by the user and populate requestedBy with ProviderRequest details
    const services = await Services.find({ postedBy: userId })
      .populate('requestedBy') // Populate the requestedBy field to get related provider requests
      .exec();

    if (services.length === 0) {
      return res.status(404).json({ error: 'No services found for this user' });
    }

    res.status(200).json({ data: services });
  } catch (error) {
    console.error('Error fetching user services:', error);
    res.status(500).json({ error: 'Error fetching user services' });
  }
};


