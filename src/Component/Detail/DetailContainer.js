import React, { useState, useEffect }  from "react";
import Header from "../Header/Header";
import Detail from "./Detail";
import api from '../../Api'

export default ({ match:{params:{id}} }) => {
  //match 내장함수를 이용해 id값을 가져왔다. 좀 더 찾아보고 공부해야할듯.
  const [getMovieData, setGetMovieData ] = useState(null)
  const getMovie = async ()=> {
    const result = await api.getDetail(id)
    setGetMovieData(result)
  }
  useEffect(()=>{
    getMovie()
  },[])
  return (
    <>
      <Header />
      {getMovieData ? <Detail getMovieData={getMovieData} id={id}/> : <div></div> }
    </>
  );
};
