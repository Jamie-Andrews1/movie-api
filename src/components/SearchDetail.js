import React, {useEffect} from 'react'
import './movie.css';

const SearchDetail =  ({ movie }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [movie])

  if(!movie) {
    return <div>{''}</div>
  }

      return (
        <div className="movie">
          <div className="card">
            <div className="card-image">
              <img alt={movie.Title} src={movie.Poster} />
            </div>
            <div className="card-content">
              <h2>Score {movie.imdbRating}</h2>
              <p style={{maxWidth:'80ch', margin:'auto'}}><b>{`${movie.Plot}`}</b></p>
            </div>
          </div>
        </div>
        
      )
  }
  export default SearchDetail;