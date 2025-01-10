const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    serviceCategory: {
      type: String,
      required: [true, "Service category must be provided"],
    },
    ServiceDescription: {
      type: String,
      required: [true, "Service description must be provided"],
    },
    location: {
      type: String,
      required: [true, "Location must be provided"],
    },
    serviceCharge: {
      type: String,
      required: [true, "Service charge must be provided"],
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Make sure the User model is correctly referenced
      required: true,
    },
    requestedBy: [{ 
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProviderRequest",
    }],
  },
  {
    timestamps: true,
  }
);

const Services = mongoose.model("Services", serviceSchema);
module.exports = Services;
