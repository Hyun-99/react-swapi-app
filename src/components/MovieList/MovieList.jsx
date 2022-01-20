import React from "react";
import styles from "./MovieList.module.css";
import Movie from "../Movie/Movie";

const MovieList = (props) => {
  return (
    <ul className={styles["movie-list"]}>
      {props.movies.map((movie) => {
        return (
          <Movie
            key={movie.episode_id}
            title={movie.title}
            releaseDate={movie.release_date}
            opening={movie.opening_crawl}
          />
        );
      })}
    </ul>
  );
};

export default MovieList;
