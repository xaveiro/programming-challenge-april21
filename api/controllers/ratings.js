const models = require("../models/index");
const Ratings = models.ratings;
const Movies = models.movies;

async function getTopKRatedMovies(req,res){
    const ratings = await Ratings.findAll({
        order: [['avgRating', 'DESC']],
        include: Movies,
        limit: parseInt(req.params.k.substring(1))
    })
    res.json(ratings);
};

module.exports = {getTopKRatedMovies}
