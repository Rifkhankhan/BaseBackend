const mongoose = require('mongoose');

const Schema = mongoose.Schema;
 
const MovieSchema = new Schema({      
    name : String,
    category : String,
    subCategory : String,
    year : Number,
    type : String,
    desc:String,
    image : String,
    likes:[],
    dislikes:[],
    downloads:[],
    save:[],
    yourVideos:[]
},
{
    timestamps: true
}
);

const MovieModel = mongoose.model("movies",MovieSchema)
module.exports = MovieModel