import React from 'react'
import './movie.css';

const SearchDetail =  ({ movie }) => {
    
    if(!movie) {
      return <div>{''}</div>
    }
      return (
        <div className="center-align">
          <h1><b>{movie.Title}</b></h1>
          <h2><b>Plot</b></h2>
          <p><b>{`${movie.Plot}`}</b></p>
        </div>
      )
  }
    
  

  export default SearchDetail;