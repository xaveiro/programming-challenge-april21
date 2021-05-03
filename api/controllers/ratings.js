const models = require("../models/index");
const Ratings = models.ratings;

async function getTopKRatedMovies(req,res){
    const ratings = await Ratings.findAll({
        order: [['avgRating', 'DESC']]
    })
    res.json(ratings);
};

module.exports = {getTopKRatedMovies}
