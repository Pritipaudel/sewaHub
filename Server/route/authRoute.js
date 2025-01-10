const userRegister = require('../controller/auth/userRegister')
const userLogin =require('../controller/auth/userLogin')
const router =require("express").Router()

router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
module.exports=router;

