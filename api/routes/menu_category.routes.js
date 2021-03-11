
const router = require("express").Router();
const Category = require("../controllers/menu_category.controller");
const checkAuth = require('../middleware/userAuth');
const multer = require('multer');
const upload = multer({ dest: 'upload/'});

router.post('/', upload.single('mediafile'), checkAuth, Category.create);
router.get('/', Category.getAll);
router.get('/:categoryId', Category.getOne);
router.put('/:categoryId', checkAuth, Category.update);
router.delete('/:categoryId', checkAuth, Category.delete);


module.exports = router