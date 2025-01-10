const { createProvider, deleteProvider, updateProvider, getProviderProfile, getProviders } = require('../controller/provider/profile');
const isAuthenticated = require('../middleware/isAuthenticated');
const permissionTo=require('../middleware/permissionTo')
const router = require('express').Router();

router.route('/createProvider/:id').post(isAuthenticated,permissionTo("provider"),createProvider);
router.route('/deleteProvider/:id').delete(isAuthenticated, deleteProvider);
router.route('/updateProvider/:id').put(updateProvider);
router.route('/provider/:id').get(isAuthenticated,getProviderProfile);


module.exports = router;
