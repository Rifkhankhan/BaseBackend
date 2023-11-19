const router = require('express').Router();
const {CreateProduct, getProducts, getFruits, getFruit, likeItem,
     getWishList, buyProduct, acceptBuyProduct,getPendingProducts, 
     getOrders, getProcessingList, finishProcessing 
     ,getShipList,cancelOrder,getCancelList,finishShipping,
     returnProduct,getReturns,getUserReturns,getAllShipped,getUserShipped,
     getUserCancelList,getCardList, getShopProducts, getProductsByType, deleteProduct, 
     getProduct, updateProduct

    } = require('../Controllers/ProductController.js');
var fileUpload = require('../Middleware/file-upload');

// router.post('/createDisease',fileUpload.single('image') ,diseaseController.createDisease);

//add new request
router.post('/', CreateProduct);
router.get('/', getProducts);

router.put('/:id', updateProduct);
router.get('/:id', getProduct);
router.get('/products/:type', getProductsByType);
router.delete('/:id', deleteProduct);

router.get('/fruits', getFruits);
router.get('/fruits/:id', getFruit);
router.put('/like/:id', likeItem);
router.get('/wish/:id', getWishList);
router.put('/buy', buyProduct);

router.get('/pending', getPendingProducts);
router.put('/:id/accept', acceptBuyProduct);
router.get('/:id/order', getOrders);
router.get('/process', getProcessingList);
router.get('/:id/finishProcess', finishProcessing);
router.put('/:id/cancel', cancelOrder);
router.get('/cancel', getCancelList);
router.get('/:id/cancel', getUserCancelList);
router.get('/ship', getShipList);
router.get('/:id/finishShipping', finishShipping);
router.get('/shipped', getAllShipped);
router.get('/:id/shipped', getUserShipped);
router.get('/:id/return', returnProduct);
router.get('/returns', getReturns);
router.get('/:id/returns', getUserReturns);

//shop
router.get('/shop/:id', getShopProducts);

module.exports = router;   
//63ee420bae2cc935156c8e46
//63f203246b19e722ae4a7d1c  