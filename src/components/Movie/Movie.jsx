import React from "react";
import Card from "../UI/Card";
import styles from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={styles.movie}>
      <Card className={styles["movie-card"]}>
        <h1>{props.title}</h1>
        <h3>{props.releaseDate}</h3>
        <p>{props.opening}</p>
      </Card>
    </li>
  );
};

export default Movie;
