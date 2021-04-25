import React from 'react';

let search = 'search'

class SearchBar extends React.Component {
  state = { term: ''};

  onInputChange = e => {
    this.setState({ term: e.target.value })
    if(document.querySelector('input').value){
      return search = '';
   }
   return search = 'search'
  };

  onFormSubmit = e => {
    e.preventDefault();
    
    this.props.onFormSubmit(this.state.term)
  }

  
  render() {
    return (
  <nav className="#d50000 red accent-4">
    <div className="nav-wrapper">
      <form onSubmit={this.onFormSubmit}>
        <div className="input-field">
          <input id="search" type="search"  
          value={this.state.term}
          onChange={this.onInputChange} required />
          <label className="label-icon" htmlFor="search"><i className="material-icons">{search}</i></label>
          <i className="material-icons">close</i>
        </div>
      </form>
    </div>
  </nav>
    )
  }
}

export default SearchBar;