import React from 'react';
import axios from 'axios';

class MainView extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    axios.get('<https://edge-of-umbra.herokuapp.com/movies>')
      .then(response => {
        this.setState({
          movies: response.data
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    const { movies } = this.state;
    if (!movies) return <div className="main-view" />;
    return (
      <div className="main-view">
        {movies.map(movie => (
          <div className="movie-card" key={movie._id}>{movie.Title}</div>
        ))}
      </div>
    );
  }
}