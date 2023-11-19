const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const ProductSchema = new Schema({      
    name : String,
    category : String,
    brand : String,
    shopId : String,
    price:Number,
    salesCount:{
        type:Number,
        default:0
    },
    images : [],
    existence:Number,
    likes:[], 
    cancel:[],
    ship:[], 
    processing:[],
    review:[],
    pending:[]
    // orders in user
},
{
    timestamps: true
}
);

const ProductModel = mongoose.model("products",ProductSchema)
module.exports = ProductModel