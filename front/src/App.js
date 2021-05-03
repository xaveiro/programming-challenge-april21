import './App.css';

// Components
import Topbar from "./components/topbar/Topbar.js"
import Movie from "./components/movie/Movie.js"
import { useEffect, useState } from 'react';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [currentHeader, setCurrentHeader] = useState([]);

  function callbackTopbar(m) {
    setMovieList(m)
  }

  function callbackHeader(m) {
    setCurrentHeader(m)
  }


  return (
    <div className="App">
      <Topbar callback={callbackTopbar} headercallback={callbackHeader} />
      {movieList.length > 0 ? 
    <span className='header'>
    {currentHeader}
  </span>
  : <div></div>  
    
    }
      <div className="movielist">
        {movieList.map((movie, id) => {
          return (

            <Movie movie={movie} />
          )

        })}
      </div>



    </div>
  );
}

export default App;
