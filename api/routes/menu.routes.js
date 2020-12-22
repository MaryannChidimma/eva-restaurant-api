const router = require("express").Router();
const MenuRoute = require("../controllers/menu.controller");
const checkAuth = require('../middleware/adminAuth');
const asyncMiddleware = require('../middleware/async')

router.post('/', checkAuth, asyncMiddleware(MenuRoute.create));
router.get('/', asyncMiddleware(MenuRoute.getAll));
router.get('/:foodId', asyncMiddleware(MenuRoute.getOne));
router.put('/:foodId', checkAuth, asyncMiddleware(MenuRoute.update));
router.delete('/:foodId, checkAuth', asyncMiddleware(MenuRoute.delete));


module.exports = router