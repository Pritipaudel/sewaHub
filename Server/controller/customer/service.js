const Services = require("../../model/serviceModel");
const fs = require("fs");
require("dotenv").config();
exports.createService = async (req, res) => {
  const { serviceCategory, ServiceDescription, location, serviceCharge } = req.body;

  // Assuming you have the user ID from authentication (e.g., req.user._id)
  const postedBy = req.user._id; // Extract from authentication middleware

  if (!serviceCategory || !ServiceDescription || !location || !serviceCharge) {
    return res.status(400).json({
      message: "Please provide serviceCategory, ServiceDescription, location, and serviceCharge",
    });
  }

  try {
    const serviceCreated = await Services.create({
      serviceCategory,
      ServiceDescription,
      location,
      serviceCharge,
      postedBy, // Add postedBy field to the service creation
    });

    res.status(200).json({
      message: "Service created successfully",
      data: serviceCreated,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while creating the service",
      error: error.message,
    });
  }
};


// Delete Service
exports.deleteService = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Please provide service id",
    });
  }

  try {
    await Services.findByIdAndDelete(id);
    res.status(200).json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while deleting the service",
      error: error.message,
    });
  }
};

// Edit Service
exports.editService = async (req, res) => {
  const { id } = req.params;
  const { serviceCategory, ServiceDescription, location, serviceCharge } = req.body;

  if (!serviceCategory || !ServiceDescription || !location || !serviceCharge || !id) {
    return res.status(400).json({
      message:
        "Please provide serviceCategory, ServiceDescription, location, serviceCharge, and id",
    });
  }

  try {
    const updatedService = await Services.findByIdAndUpdate(
      id,
      {
        serviceCategory,
        ServiceDescription,
        location,
        serviceCharge,
      },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({
        message: "No service found with that id",
      });
    }

    res.status(200).json({
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while updating the service",
      error: error.message,
    });
  }
};

exports.getServiceById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({
      message: "Please provide service id",
    });
  }

  try {
    const service = await Services.findById(id)
      .populate({
        path: 'postedBy',
        select: 'fullName',  // Only populate the fullName field from the User model
      });

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.status(200).json({
      message: "Service fetched successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching the service",
      error: error.message,
    });
  }
};



// Get All Services
exports.getAllServices = async (req, res) => {
  try {
    const services = await Services.find()
      .populate({
        path: 'postedBy',  // Populate the postedBy field from the User model
        select: 'fullName', // Only return the fullName from the User document
      });

    if (!services.length) {
      return res.status(404).json({
        message: "No services found",
      });
    }

    res.status(200).json({
      message: "Services fetched successfully",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while fetching services",
      error: error.message,
    });
  }
};
