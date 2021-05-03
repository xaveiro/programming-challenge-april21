import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icons/search.png'
import MovieCam from '../../assets/icons/movie_camera.png'
import './Topbar.css'

function Topbar({ callback, headercallback }) {


    const [genreList, setGenreList] = useState([]);
    const [getGenre, setGenre] = useState();
    const [inputYear, setInputYear] = useState(2021)
    const [inputK,setKRateMovies] = useState(0)


    useEffect(getGenres, [])


    function getGenres() {
        axios.get("http://localhost:3000/genres").then((res) => {
            setGenreList(res.data)
            setGenre(res.data[0])
        })
    }


    function searchMovieByYearAndGenre(year, genre) {
        axios.get(`http://localhost:3000/movies/year:${year}&genre:${genre}`).then((res) => {
            callback(res.data)
            headercallback(`Found ${res.data.length} movies from ${year}, about ${genre}`)
        })
    }
    
    function getKRatedMovies(k){
        axios.get(`http://localhost:3000/avgRating:${k}`).then((res) =>{
            const movies = []
            res.data.forEach(element => {
                if(element.movie)
                    movies.push(element.movie)
            });
            callback(movies)
            headercallback(`Top ${k} rated movies:`)

        })
    }


    return (
        <div className="topbar">
            <img className='movieCam' src={MovieCam}></img>

            <div className="team">
                <h3>Search movies from year and genre</h3>
                <input placeholder="Year" onChange={(e) => {
                    setInputYear(e.target.value)

                }} type="number" />

                <select onChange={(e) => {
                    setGenre(e.target.value)
                }}>
                    {genreList.map((genre, index) => {

                        return (
                            <option value={genre} key={'genre_' + index} >{genre}</option>
                        )

                    })}

                </select>

                <button onClick={() => {
                    searchMovieByYearAndGenre(inputYear, getGenre)
                }}><img className='searchIcon' src={SearchIcon}></img></button>
            </div>
            
            <div clasName="team">
                <h3>Top K rated movies</h3>
                <input placeholder="K movies" onChange={(k) => {
                    setKRateMovies(k.target.value)
                }}type="number"/>

                <button onClick={() =>{
                    getKRatedMovies(inputK)
                }}><img className='searchIcon' src={SearchIcon}></img></button>
            </div>

        </div>
    )

}

export default Topbar;