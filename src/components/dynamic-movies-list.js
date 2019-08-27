import React from 'react';

import ImprovedCard from './improved-card';

export default class DynamicMoviesList extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: 'Jurasic Park', director: 'Steven Spielberg' },
        { title: 'The Godfather', director: 'Francis Ford Coppola' },
        { title: 'Pulp Fiction', director: 'Quentin Tarantino' },
      ]
    }
  }

  deleteItemHandler = (index) => {
    const moviesCopy = [...this.state.movies];
    moviesCopy.splice(index, 1);
    this.setState({
      movies: moviesCopy
    });
  }

  render() {
    console.log(this.state.movies);
    return(
      <div>
        {
          this.state.movies.map( (movie, index) => {
            return <ImprovedCard key={index} {...movie} clickToDelete={() => this.deleteItemHandler(index)}></ImprovedCard>
          })
        }
      </div>
    )
  }
}