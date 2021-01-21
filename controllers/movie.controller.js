const Movie = require('../models/Movie');
require('dotenv').config()


const movieCtrl = {}

movieCtrl.getAllMovies = async(req,res)=>{
    const allmovies = await Movie.find({}).sort({updatedAt:-1});
    res.json(allmovies);
}



/* movieCtrl.createMovie = async(req,res)=>{
    console.log(Movie);
    const {title,description,gender,urlImage} = req.body;
    const newMovie = new Movie({title,description,gender,urlImage});
    await newMovie.save();
    res.json(newMovie);
} */


module.exports = movieCtrl;