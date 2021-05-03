const express = require("express");
const movieController = require("../controllers/movies");
const ratingController = require("../controllers/ratings");
const router = express.Router();

router.get("/movies/year:year&genre:genre", movieController.getMoviesByYearAndGenre);
router.get("/genres", movieController.getGenres);
router.get("/avgRating:k", ratingController.getTopKRatedMovies);


module.exports = router;