const models = require("../models/index");
const Movies = models.movies;

async function getMoviesByYearAndGenre(req,res){
    const movies = await Movies.findAll({
        where:{
            year: parseInt(req.params.year.substring(1)),
            genre: req.params.genre.substring(1),
        }
    })
    res.json(movies);
};

module.exports = {getMoviesByYearAndGenre}

