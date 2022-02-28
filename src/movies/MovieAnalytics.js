import { groupBy } from "../utils/ArrayUtil";

const MovieAnalytics = ({ data }) => {
  console.log("MovieAnalytics: data: ", data);
  const groupedMovies = groupBy(data, "director");
  const allDirectors = Reflect.ownKeys(groupedMovies);

  console.log("MovieAnalytics: groupedMovies: ", groupedMovies);

  const directors = allDirectors.map((director) => {
    const movies = groupedMovies[director];
    const totalMovies = movies.length;
    const totalRuntime = movies.reduce(
      (total, movie) => total + movie.runtime,
      0
    );
    const averageRuntime = totalRuntime / totalMovies;
    return {
      director,
      totalMovies,
      totalRuntime,
      averageRuntime,
    };
  });
  return (
    <div className="movie-container">
      <DirectorTable directors={directors} />
    </div>
  );
};

const DirectorTable = ({ directors }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Director</th>
          <th>Total Movies</th>
          <th>Total Runtime</th>
          <th>Average Runtime</th>
        </tr>
      </thead>
      <tbody>
        {directors.map((director) => (
          <tr key={director.director}>
            <td>{director.director}</td>
            <td>{director.totalMovies}</td>
            <td>{director.totalRuntime}</td>
            <td>{director.averageRuntime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieAnalytics;
