import React from 'react';
import './movie.css';

const SearchItem = ({ movie, onMovieSelect }) => {
  
  return (
  <div>
    <div className="col s12 m7" onClick={() => onMovieSelect(movie)}>
      <div className="card">
        <div className="card-image">
          <img src={movie.Poster} alt={''} />
          <span className="card-title"><b style={{color:'red'}}>{movie.Year}</b></span>
        </div>
      </div>
    </div>
  </div>
  )
};

export default SearchItem;