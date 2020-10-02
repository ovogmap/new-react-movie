import React, { useEffect, useState } from "react";
import Main from "./Main";
import Header from "../Header/Header";
import api from "../../Api";
import axios from "axios";
import styled from "styled-components";
const MainBox = styled.div`
  position: relative;
`;

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

  useEffect(() => {
    if (movie) {
      console.log(movie.id);
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${movie.id}?api_key=1d3ad3a1e497c9afbe443d1443905c3f&language=ko-KR`
        )
        .then((response) => {
          const result = response.data;
          setMovieData(result);
        });
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
