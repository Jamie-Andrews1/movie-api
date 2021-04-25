import React from 'react';
import SearchItem from './SearchItem';
import './movie.css';

const SearchList = ({movies, onMovieSelect}) => {
  if(!movies){ 
    return <p style={{textAlign:'center', color:'red'}}><b>Could'nt find movie try again!!!</b></p>
  }
  const renderedList = movies.map((movie) => {
    return <SearchItem key={movie.imdbID} onMovieSelect={onMovieSelect} movie={movie} />
  });
  return (
    <div className="grid">{renderedList}</div>
  )
};

export default SearchList