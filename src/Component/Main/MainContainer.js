import React, { useEffect, useState } from "react";
import Main from "./Main";
import Header from "../Header/index";
import api from "../../Api";

export default () => {
  const [movie, setMovie] = useState(null);
  const [movieData, setMovieData] = useState(null);

  const fetchMovie = async () => {
    const newMovie = await api.now_playing();
    const index = Math.floor(Math.random() * newMovie.data.results.length);
    setMovie(newMovie.data.results[index]);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  const detailMovie = async () => {
    const result = await api.getDetail(movie.id).then((response) => {
        return response.data;
      });
    setMovieData(result);
  };
  useEffect(() => {
    if (movie) {
      console.log(movie.id);
      detailMovie();
    }
  }, [movie]);
  // useEffect(() => {
  //   console.log(movie);
  // }, [movie]);
  return (
    <>
      <Header />
      {movieData ? <Main movieData={movieData}></Main> : <div></div>}
    </>
  );
};
