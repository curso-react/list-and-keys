import React from 'react';

import Card from './card';

const numbers = [1, 2, 3, 4, 5, 6];
const movies = [
  { title: 'Jurasic Park', director: 'Steven Spielberg' },
  { title: 'The Godfather', director: 'Francis Ford Coppola' },
  { title: 'Pulp Fiction', director: 'Quentin Tarantino' },
]

export const listItems = numbers.map( (e, i) => <li key={i}>{ e }</li>);

export const MoviesList = () => {
  return(
    <ul>
      {
        movies.map( (movie, i) => <Card key={i} title={movie.title} director={movie.director}></Card>)
      }
    </ul>
  )
}