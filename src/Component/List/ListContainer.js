import React, { useState, useEffect } from "react";
import Header from "../Header";
import List from "./List.js";
import api from "../../Api";

export default () => {
  const [movie, setMovie] = useState(null);
  const fetchMovie = async () => {
    const result = await api.now_playing();
    console.log(result.data.results);
    setMovie(result.data.results);
  };
  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Header />
      {movie ? <List movie={movie} /> : <div></div>}
    </>
  );
};
