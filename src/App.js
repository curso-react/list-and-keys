import React from 'react';
import logo from './logo.svg';
import './App.css';

import { listItems, MoviesList } from './components/list-demo';
import DynamicMoviesList from './components/dynamic-movies-list';

function App() {
  return (
    <div className="App">
      <header/>
      <ul>{ listItems }</ul>
      <div><MoviesList></MoviesList></div>
      <hr/>
      <h1>Lista dinámica</h1>
      <DynamicMoviesList></DynamicMoviesList>
    </div>
  );


}

export default App;
