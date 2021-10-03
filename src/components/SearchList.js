import React from 'react';
import SearchItem from './SearchItem';
import './movie.css';

const SearchList = ({movies, onMovieSelect, isLoading}) => {
  if(!movies){ 
    return <h1 style={{textAlign:'center', color:'red'}}><b>Could'nt find movie, try again!!!</b></h1>
  } 
  const filteredMovies = movies.filter(movie => movie.Poster !== 'N/A')
  
  const renderedList = filteredMovies.map((movie) => {
    return <SearchItem key={movie.imdbID} onMovieSelect={onMovieSelect} movie={movie} />
  });
  return (
    <div className="grid">{renderedList}
    </div>

  )
};

export default SearchList