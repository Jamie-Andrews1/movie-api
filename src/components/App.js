import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import SearchDetail from './SearchDetail';
import axios from 'axios';
import imdb from '../apis/imdb';
import './movie.css'

class App extends React.Component {
    state = { movies: [], selectedMovie: null, plot: null};
    
    componentDidMount(){
      this.onTermSubmit('Avengers');
    }
    
    onTermSubmit = async term => {
      const response = await axios.get('https://www.omdbapi.com/', {
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
        i: movie.imdbID,
        plot: 'full'
       }
    })
    this.setState({plot: response.data})
  }
 
  render() {
    return (
    <div onClick={() => <SearchDetail /> ? this.setState({plot: ''}) : null}>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <SearchDetail movie={this.state.plot} />
      <div>
        <SearchList onMovieSelect={this.onMovieSelect} movies={this.state.movies} />
      </div>
    </div>
    )
  }
}
export default App;