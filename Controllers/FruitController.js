const FruitModel = require('../Models/FruitModel');

exports.CreateFruit = async (req, res, next) => {
	// name,price
	const newShop = new FruitModel({
		name:req.body.name,
        owner:req.body.owner,
        area:req.body.area,
        address:req.body.address,
        images:req.body.image
	});

	try {
		await newFruit.save();
	} catch (err) {
		return next(err);
	}
	res.json(newFruit);
};

exports.getFruits = async (req, res, next) => {

	try {
		const shops = await FruitModel.find()
        res.json(shops);
	} catch (err) {
		return next(err);
	}
};

exports.getFruit = async (req, res, next) => {
	const {id} = req.params
	try {
		const shop = await FruitModel.find({_id:id})
        res.json(shop);
	} catch (err) {
		return next(err);
	}
};

