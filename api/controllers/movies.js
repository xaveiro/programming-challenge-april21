const models = require("../models/index");
const Movies = models.movies;
const Sequelize = require("sequelize")

async function getMoviesByYearAndGenre(req,res){
    const movies = await Movies.findAll({
        where:{
            year: parseInt(req.params.year.substring(1)),
            genre: req.params.genre.substring(1),
        }
    })
    res.json(movies);
};

async function getGenres(req,res){
    const genres = await Movies.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('genre')), 'genre']
        ]
    })

    const response = [];
    genres.forEach((g)=>{
        response.push(g.genre)
    })


    res.json(response);
}

module.exports = {getMoviesByYearAndGenre,getGenres}

