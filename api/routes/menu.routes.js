
const router = require("express").Router();
const MenuRoute = require("../controllers/menu.controller");

router.post('/', MenuRoute.create);
router.get('/',  MenuRoute.getAll);
router.get('/:foodId', MenuRoute.getOne);
router.put('/:foodId', MenuRoute.update);
router.delete('/:foodId', MenuRoute.delete);


module.exports = router