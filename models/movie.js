const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    moviename:String,
imdb:Number,
cat1:String,
cat2:String,
cat3:String,
posterh:String,
posterv:String,
url:String,
})


const Movie = mongoose.model('Movie',movieSchema)
module.exports =Movie
