import { Fragment } from "react/cjs/react.production.min";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import { useState } from "react";
import MovieList from "./components/MovieList/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovieHandler = () => {
    setIsLoading(true);

    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((result) => setMovies(result.results), setIsLoading(false));
  };

  let content = null;

  if (movies.length === 0) {
    content = <p>Found No Moives.</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      <Card className={styles["home-card"]}>
        <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
      </Card>

      <Card>
        {content}
        {!isLoading && <MovieList movies={movies} />}
      </Card>
    </Fragment>
  );
}

export default App;
