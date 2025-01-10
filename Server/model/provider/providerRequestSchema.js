const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const providerRequestSchema = new Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Services', // Reference to the Services collection
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the provider who is responding
    required: true,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending',
  },
  sentAt: {
    type: Date,
    default: Date.now,
  },
});

const ProviderRequest = mongoose.model('ProviderRequest', providerRequestSchema);
module.exports = ProviderRequest;
