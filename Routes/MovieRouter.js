const router = require('express').Router();
const {CreateItem, getItems, updateItem, getItem,deleteItem, 
    CreateCategory, getCategories, likeItem ,saveItem, 
    dislikeItem,downloadItem,deleteCategory} = require('../Controllers/MovieController');

var fileUpload = require('../Middleware/file-upload');

router.post('/',fileUpload.single('image') ,CreateItem);
router.post('/category',CreateCategory);
router.delete('/category/:id',deleteCategory);
router.get('/category', getCategories);
router.get('/', getItems);

router.put('/:id',fileUpload.single('image'), updateItem);
router.get('/:id', getItem);
router.delete('/:id',fileUpload.single('image'), deleteItem);
router.put('/item/like', likeItem);
router.put('/item/dislike', dislikeItem);
router.put('/item/save', saveItem);
router.put('/item/download', downloadItem);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  