const router = require('express').Router();
const { CreateShop, getShops, getShop } = require('../Controllers/ShopController.js');

//add new request
router.post('/', CreateShop);
router.get('/', getShops);
router.get('/:id', getShop);

module.exports = router;   
