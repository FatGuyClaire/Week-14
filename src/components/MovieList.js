import React from "react";
import Movie from "./Movie";

//I created the MovieList class. It is a container for the Movie components.
export default class MovieList extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white"><h1>Movies</h1></div>
        <div className="card-body">
          {this.props.movies.map((movie, i) => (
            <Movie key={i} {...movie} />
          ))}
        </div>
      </div>
    );
  }
}
