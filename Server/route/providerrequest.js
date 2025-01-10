// route/providerRequestRoute.js

const express = require('express');
const router = express.Router();
const {getUserServices} = require('../controller/customer/providerRequestforservice');


// Route to fetch provider requests for a customer's services
router.get('/customer-requests/:userId', getUserServices);

module.exports = router;
