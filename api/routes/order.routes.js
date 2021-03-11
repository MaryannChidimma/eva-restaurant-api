require('express-async-errors');
const router = require("express").Router();
const OrderRoute = require("../controllers/order.controller");
const checkAuth = require('../middleware/userAuth');
const multer = require('multer');
const upload = multer({ dest: 'uploads/'});

router.post('/',  OrderRoute.create);
router.get('/',  checkAuth, OrderRoute.getAll);
router.get('/:orderId', checkAuth, OrderRoute.getOne);
router.put('/:orderId', checkAuth, OrderRoute.update);
router.delete('/:orderId', checkAuth, OrderRoute.delete);


module.exports = router