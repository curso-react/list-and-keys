import React from 'react';

const imporvedCard = (props) => {
  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>Director: {props.director}</p>
      <button onClick={props.clickToDelete}>Delete</button>
    </div>
  )
}

export default imporvedCard;