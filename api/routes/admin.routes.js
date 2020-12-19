const router = require("express").Router();
const adminRoute = require("../controllers/admin.controller");
const checkAuth = require('../middleware/adminAuth');

router.post('/signup', adminRoute.signup);
router.post('/login',  adminRoute.login);
router.delete('/:adminId', checkAuth,  adminRoute.delete);


module.exports = router