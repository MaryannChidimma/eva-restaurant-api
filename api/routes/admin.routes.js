const router = require("express").Router();
const adminRoute = require("../controllers/admin.controller");
const checkAuth = require('../middleware/adminAuth');
const asyncMiddleware = require('../middleware/async')

router.post('/signup', asyncMiddleware(adminRoute.signup));
router.post('/login', asyncMiddleware(adminRoute.login));
router.delete('/:adminId', checkAuth,  asyncMiddleware(adminRoute.delete));


module.exports = router