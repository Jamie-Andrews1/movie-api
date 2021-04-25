import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import axios from 'axios';
import SearchDetail from './SearchDetail';
import imdb from '../apis/imdb';

class App extends React.Component {
    state = { movies: [], selectedMovie: null, plot: null};

    componentDidMount(){
      this.onTermSubmit('Avengers')
    }
    
    onTermSubmit = async term => {
      const response = await axios.get('http://www.omdbapi.com/', {
      params: {
        apikey:'e2297cad',
        s: term
      }
    });
      this.setState({ movies: response.data.Search })
      
    }

    onMovieSelect = movie => {
      this.setState({ selectedMovie: movie })
      this.moviePlot(movie)
    }
    moviePlot = async (movie) => {
    const response = await imdb.get('/', {
      params: {
        i: movie.imdbID
      }
    })
    this.setState({plot: response.data})
  }
  
  render() {
    return (
    <div>
      <SearchBar onFormSubmit={this.onTermSubmit} />
      <div>
        <div>
          <SearchDetail movie={this.state.plot} />
        </div>
        <SearchList onMovieSelect={this.onMovieSelect} movies={this.state.movies} />
      </div>
    </div>
    )
  }
} 
export default App;