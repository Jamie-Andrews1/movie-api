import React from 'react'
import './movie.css';

const SearchDetail =  ({ movie }) => {
    // console.log({movie})
    if(!movie) {
      return <div>{''}</div>
    }
      return (
        <div className="center-align">
          <h1><b>{movie.Title}</b></h1>
          <h2>Score {movie.imdbRating}</h2>
          <p><b>{`${movie.Plot}`}</b></p>
        </div>
      )
  }
    
  

  export default SearchDetail;