const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const ShopSchema = new Schema({      
    name : String,
    address : String,
    area : String,
    owner : String,
    images : String,
},
{
    timestamps: true
}
);

const ShopModel = mongoose.model("Shop",ShopSchema)
module.exports = ShopModel