import { Fragment } from "react/cjs/react.production.min";
import styles from "./App.module.css";
import Card from "./components/UI/Card";
import Button from "./components/UI/Button";
import { useEffect, useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovieHandler = () => {
    fetch("https://swapi.dev/api/films")
      .then((response) => response.json())
      .then((result) => setMovies(result.results));
  };

  return (
    <Fragment>
      <Card className={styles["home-card"]}>
        <Button onClick={fetchMovieHandler}>Fetch Movies</Button>
      </Card>
    </Fragment>
  );
}

export default App;
