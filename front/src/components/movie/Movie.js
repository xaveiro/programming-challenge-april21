import './Movie.css'

function Movie({ movie }) {

    return (
        <div className="movie">
            <span className='title'>{movie.title}</span>
        </div>
    )

}
export default Movie;