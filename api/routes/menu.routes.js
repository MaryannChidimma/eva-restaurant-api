
const router = require("express").Router();
const MenuRoute = require("../controllers/menu.controller");
const checkAuth = require('../middleware/adminAuth');
router.post('/', checkAuth, MenuRoute.create);
router.get('/',  MenuRoute.getAll);
router.get('/:foodId', MenuRoute.getOne);
router.put('/:foodId', checkAuth, MenuRoute.update);
router.delete('/:foodId, checkAuth', MenuRoute.delete);


module.exports = router