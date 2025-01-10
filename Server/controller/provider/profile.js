const Provider = require('../../model/providerModel');
const User = require('../../model/userModel');

exports.createProvider = async (req, res) => {
  const { experienceDetails, expertise, location, phoneNumber } = req.body;
  const userId = req.params.id;  // Ensure userId is passed correctly

  // Check if required fields are provided
  if (!experienceDetails || !expertise || !location || !phoneNumber) {
    return res.status(400).json({
      message: 'Please provide all required fields: experience, expertise, location, and phone number',
    });
  }

  try {
    // Corrected: Pass userId as a string, not an object
    const user = await User.findById(userId);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Create a new provider instance linked to the user ID
    const newProvider = new Provider({
      experienceDetails,
      expertise,
      location,
      phoneNumber,
      userId: user._id  // Linking the provider with the user
    });

    // Save the new provider to the database
    const savedProvider = await newProvider.save();
    res.status(201).json({
      message: 'Provider created successfully',
      data: savedProvider,
    });
  } catch (error) {
    // Log error for debugging
    console.error('Error in createProvider:', error.message);

    res.status(500).json({
      message: 'An error occurred while creating the provider',
      error: error.message,
    });
  }
};

// Get all providers
exports.getProviders = async (req, res) => {
  try {
    const providers = await Provider.find();
    res.status(200).json({
      message: 'Providers retrieved successfully',
      data: providers,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while retrieving providers',
      error: error.message,
    });
  }
};


// Controller function to fetch provider profile by userId
exports.getProviderProfile = async (req, res) => {
  try {
    const userId = req.params.id;

    // Find provider profile by userId and populate user information (optional)
    const providerProfile = await Provider.findOne({ userId }).populate('userId', 'fullName userGmail');

    if (!providerProfile) {
      return res.status(404).json({ message: 'Provider profile not found' });
    }

    // Send back provider profile data
    res.status(200).json(providerProfile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};



// Update a provider by ID
exports.updateProvider = async (req, res) => {
  const { id } = req.params;
  const { name, experienceDetails, expertise, location, phoneNumber } = req.body;

  try {
    const updatedProvider = await Provider.findByIdAndUpdate(
      id,
      { name, experienceDetails, expertise, location, phoneNumber },
      { new: true }
    );

    if (!updatedProvider) {
      return res.status(404).json({
        message: 'Provider not found',
      });
    }

    res.status(200).json({
      message: 'Provider updated successfully',
      data: updatedProvider,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while updating the provider',
      error: error.message,
    });
  }
};

// Delete a provider by ID
exports.deleteProvider = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProvider = await Provider.findByIdAndDelete(id);
    if (!deletedProvider) {
      return res.status(404).json({
        message: 'Provider not found',
      });
    }

    res.status(200).json({
      message: 'Provider deleted successfully',
      data: deletedProvider,
    });
  } catch (error) {
    res.status(500).json({
      message: 'An error occurred while deleting the provider',
      error: error.message,
    });
  }
};
