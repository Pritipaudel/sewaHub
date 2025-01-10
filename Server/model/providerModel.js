const mongoose = require('mongoose');

const providerSchema = new mongoose.Schema({
    experienceDetails: {
        type: String,
        required: true
    },
    expertise: {
        type: [String],
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v); // Basic validation for a 10-digit phone number
            },
            message: props => `${props.value} is not a valid phone number!`
        }
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;
