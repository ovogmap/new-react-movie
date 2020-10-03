import React, { useEffect, useState } from "react";
import { MainBox, MainInner, MainTitle, Btn } from "./MainStyle";
import { Link } from "react-router-dom";

//http://image.tmdb.org/t/p/w220_and_h330_face/ -> 작은사진
//http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/ -> 큰사진
export default ({ movieData }) => {
  const [imgUrl, setImgUrl] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    setImgUrl(
      `url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${movieData.backdrop_path}) center / cover no-repeat`
    );
    console.log(movieData);
  }, [movieData]);

  const onClickMore = () => {
    const id = movieData.id;
    setId(id);
    console.log(id);
  };
  return (
    <MainBox style={{ background: imgUrl }}>
      <MainInner>
        <h2>오늘의 영화</h2>
        <p>{movieData.tagline}</p>
        <MainTitle>{movieData.title}</MainTitle>
        <Link to={`/detail/${movieData.id}`}>
          <Btn onClick={() => {}}>더보기</Btn>
        </Link>
        {/* // 1. detail페이지로 이동, 2.영화id를 params로 넘겨줌. */}
      </MainInner>
    </MainBox>
  );
};
