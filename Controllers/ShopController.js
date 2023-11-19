const ShopModel = require('../Models/ShopModel');

exports.CreateShop = async (req, res, next) => {
	// name,price
	const newShop = new ShopModel({
		name:req.body.name,
        owner:req.body.owner,
        area:req.body.area,
        address:req.body.address,
        images:req.body.image
	});

	try {
		await newShop.save();
	} catch (err) {
		return next(err);
	}
	res.json(newShop);
};

exports.getShops = async (req, res, next) => {

	try {
		const shops = await ShopModel.find()
        res.json(shops);
	} catch (err) {
		return next(err);
	}
};

exports.getShop = async (req, res, next) => {
	const {id} = req.params
	try {
		const shop = await ShopModel.find({_id:id})
        res.json(shop);
	} catch (err) {
		return next(err);
	}
};

