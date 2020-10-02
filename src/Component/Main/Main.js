import React, { useEffect, useState } from "react";
import styled from "styled-components";

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  h2 {
    font-size: 48px;
    font-weight: 600;
  }
  p {
    margin: 60px auto;
    width: 1000px;
    font-style: italic;
    display: block;
    font-size: 60px;
    text-align: center;
    font-weight: 700;
  }
`;
const MainInner = styled.div`
  background: rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 100px;
  border-radius: 20px;
`;

const MainTitle = styled.h3`
  color: #fff;
  font-size: 30px;
  font-weight: 900;
`;

const Btn = styled.button`
  color: #fff;
  font-size: 60px;
  font-weight: 500;
  margin-top: 60px;
  border-radius: 10px;
  padding: 10px 30px;
  background: rgba(0, 0, 0, 0.5);
  border: 5px solid #fff;
  cursor: pointer;
  &:hover {
    background: rgba(0, 0, 0, 0.8);
  }
`;

//image.tmdb.org/t/p/w220_and_h330_face/ -> 작은사진
//http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/ -> 큰사진
export default ({ movieData }) => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {});
  useEffect(() => {
    setImgUrl(
      `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieData.backdrop_path}) center / cover no-repeat`
    );
    console.log(movieData);
  }, [movieData]);
  return (
    <MainBox style={{ background: imgUrl }}>
      <MainInner>
        <h2>오늘의 영화</h2>
        <p>{movieData.tagline}</p>
        <MainTitle>{movieData.title}</MainTitle>
        <Btn>더보기</Btn>
      </MainInner>
    </MainBox>
  );
};
