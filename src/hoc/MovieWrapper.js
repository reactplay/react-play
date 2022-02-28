
import React from "react";
import { movies } from '../data/movies';

const fetchMovies = () => {
  return movies;
};

const withFetch = (WrappedComponent) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        movies: [],
      };
    }

    componentDidMount() {
      const movies = fetchMovies();
      console.log('withFetch: componentDidMount: movies: ', movies);
      this.setState({ movies: movies });
    }

    render() {
      return <WrappedComponent movies={this.state.movies} />;
    }
  };
}

export default withFetch;