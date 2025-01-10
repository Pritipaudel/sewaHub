
const {createService,deleteService,editService,getServiceById,getAllServices}= require('../controller/customer/service');
const isAuthenticated = require('../middleware/isAuthenticated');
const router =require("express").Router()
router.route('/createServicerequest').post(isAuthenticated,createService);
router.route('/deleteservicerequest').delete(deleteService);

router.route('/updateServicerequest/:id').patch(editService);
router.route('/delete/:id').delete(isAuthenticated,deleteService);
router.route('/servicerequest/:id').get(getServiceById)
router.route('/allrequest').get(getAllServices)
module.exports=router;