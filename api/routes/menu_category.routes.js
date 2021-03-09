
const router = require("express").Router();
const Category = require("../controllers/menu_category.controller");
const checkAuth = require('../middleware/adminAuth');

router.post('/', checkAuth, Category.create);
router.get('/', Category.getAll);
router.get('/:categoryId', Category.getOne);
router.put('/:categoryId', checkAuth, Category.update);
router.delete('/:categoryId', checkAuth, Category.delete);


module.exports = router