import React from 'react';
import SearchItem from './SearchItem';
import './movie.css';
import Spinner from './Spinner';

const SearchList = ({movies, onMovieSelect}) => {
  if(!movies){ 
    return <h1 style={{display:'flex', color:'red', placeContent:"center"}}><b>Movie Not Found!!</b></h1>
  };
  let filteredMovies
   filteredMovies = movies.filter(movie => movie.Poster !== 'N/A');

  if(filteredMovies.length < 1) {
    return <h1 style={{display:'flex', color:'red', placeContent:"center"}}><b>Movie Not Found!!</b></h1>
  }

  const renderedList = filteredMovies.map((movie) => {
    return <SearchItem key={movie.imdbID} onMovieSelect={onMovieSelect} movie={movie} />
  });
  if(!renderedList){
    <Spinner/>
  }
  return (
    <div className="grid">{renderedList}
    </div>
  )
};

export default SearchList