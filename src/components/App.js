import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';
import SearchDetail from './SearchDetail';
import imdb from '../apis/imdb';
import './movie.css';
const _ = require ('lodash');

class App extends React.Component {
    state = { movies: [], plot: null};
    
    componentDidMount(){
      this.onTermSubmit('Avengers');
    }
    
    onTermSubmit = async term => {
      const response = await imdb.get('/', {
      params: {
        s: term
      }
    });

    const res = _.uniqBy(response.data.Search, 'imdbID')

    this.setState({ movies: res })
  } 
    onMovieSelect = movie => {
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
        <SearchList 
        onMovieSelect={this.onMovieSelect} 
        movies={this.state.movies} 
        />
      </div>
    </div>
    )
  }
}
export default App;